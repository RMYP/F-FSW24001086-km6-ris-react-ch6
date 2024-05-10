import axios from "axios";
import { useState, createContext, useEffect } from "react";

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

export const carsContextData = CarContext