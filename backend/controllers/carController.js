const ApiError = require("../utils/apiError")
const {car} = require("../models")
const imagekit = require("../lib/imagekit");
const validator = require("../middlewares/validator/carsValidator");
const apiError = require("../utils/apiError");

const uploadImagekit = async (files) =>{
    let image
    if(files){
        return new Promise ((resolve, reject) => {
            files.map(async (file) => {
                const split = file.originalname.split(".");
                const extension = split[split.length - 1];
    
                const uploadImg = await imagekit.upload({
                    file: file.buffer,
                    fileName: `file_${crypto.randomUUID()}.${extension}`
                })
                image = uploadImg.url
                if(image){
                    resolve(image)
                }else if(!image) console.log("There is no value")
            })
        })
    }
}

const getAllCar = async (req, res, next) => {
    try {
        const carData = await car.findAll()
        if(carData){
            res.status(200).json({
                status: "Success",
                cars: carData
            })
        }
        return next(new ApiError("Not Found", 404))
    } catch (error) {
        next(new ApiError(error.message, 500))
    }
}

const createCar = async (req, res, next) => {
    try {
        const {error, value} = validator.validateCreateInput(req.body)
        if(error) return next(new ApiError(error, 400))
        const files = req.files
        
        if(files.length > 0) await uploadImagekit(req.files).then((imageLink) => {value.image = imageLink}) 
        value.changeById = req.user.id
        const NewCar = await car.create(value)

        res.status(201).json({
            status: "success",
            car: NewCar
        })

    } catch (error) {
        next(new ApiError(error.message, 500))
    }
}

const updateCar = async (req, res, next) => {
    try {
        const {id} = req.params
        const files = req.files
        const checkCar = await car.findByPk(id)
        
        if(!checkCar) return next(new apiError(`Cant find cars with id: ${id}`, 404))
        
        const {error, value} = validator.validateUpdateInput(req.body)
        if(error) return next(new ApiError(error, 400))
        if(req.user.role !== "Admin" || req.user.role !== "SuperAdmin") return next(new ApiError("You are not authorized. Required role Admin or Super Admin", 403))
        if(files.length > 0) await uploadImagekit(req.files).then((imageLink) => {value.image = imageLink})
        value.changeById = req.user.id
        const updateCar = await checkCar.update(value)

        res.status(201).json({
            status: "success",
            car: updateCar
        })

    } catch (error) {
        next(new ApiError(error.message, 500))
    }
}

const deleteCar = async (req, res, next) => {
    try {
        const {id} = req.params
        const checkCar = await car.findByPk(id)
        if(!checkCar) return next(new apiError(`Cant find cars with id: ${id}`, 404))
        if(req.user.role !== "Admin" || req.user.role !== "SuperAdmin") return next(new ApiError("You are not authorized. Required role Admin or Super Admin", 403))

        await checkCar.destroy()
        res.status(200).json({
            status: "success",
            message: "Car has been deleted"
        })
    } catch (error) {
        next(new ApiError(error.message, 400))
    }
}


const getCarById = async (req, res, next) => {
    try {
        const {id} = req.params
        const checkCar = await car.findByPk(id)
        if(!checkCar) return next(new ApiError(`Cant find cars with id: ${id} `))
        res.status(201).json({
            status: "Success",
            car: checkCar
        })
    } catch (error) {
        next(new ApiError(error.message, 500))
    }
}
module.exports = {getAllCar, createCar, updateCar, deleteCar, getCarById}