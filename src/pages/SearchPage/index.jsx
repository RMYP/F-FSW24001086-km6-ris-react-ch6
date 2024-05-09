import HeroesComponent from "../../component/Hero"
import FilterInput from "../../component/filter"
import carImg from '../../assets/mercy.png'
import {CardSearch} from '../../component/Card'
import {carsContextData} from "../../http"
import { useState, useContext, useEffect } from "react"
    

export default function CarSearchPage(){
    const carData = useContext(carsContextData)
    const [cars, setCars] = useState([])

    useEffect(() => {
        if (carData.cars) {
          setCars(carData.cars);
        }
      }, [carData]);

    return(
        <>
         <section id="heroes">
            <HeroesComponent button={false} img={carImg}/>
        </section>
        <section>
            <FilterInput/>
        </section>
        
        </>
    )
}