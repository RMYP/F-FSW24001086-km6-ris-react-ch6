import axios from "axios";
import { useState, createContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const CarContext = createContext(null)

export function FetchCarData({children}){
  const [cars, setCars] = useState(null)
  const getCarData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/car/')
      setCars(response.data.cars)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getCarData()
  }, [])

  return(
    <CarContext.Provider value={{ cars, setCars }}>
      {children}
    </CarContext.Provider>
  )
}

export const login = (data, callback) => {
  axios.post("http://localhost:8000/api/v1/auth/login", data).then((res) => {
    callback(true, res.data.token)
  })
  .catch((err) => {
    callback(false, err)
  })
}

export const getUserName = (token) => {
  const decoded = jwtDecode(token)
  return decoded;
}

export const carsContextData = CarContext