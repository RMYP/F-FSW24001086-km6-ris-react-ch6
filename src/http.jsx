import axios from "axios";
import { useState, createContext, useEffect } from "react";

const CarContext = createContext(null)

export function FetchCarData({children}){
  const [cars, setCars] = useState(null)
  const getCarData = async () => {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
      setCars(response.data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getCarData()
  }, [])

  console.log(cars)
  return(
    <CarContext.Provider value={{ cars, setCars }}>
      {children}
    </CarContext.Provider>
  )
}

export const carsContextData = CarContext