import { carsContextData } from "../http";
import { useState, useContext, useEffect } from "react";
import { CardSearch } from "./Card";

const getCarData = () => {
    const carData = useContext(carsContextData);
    return carData
}

export default function FilterInput() {
  const carData = getCarData()

  const [cars, setCars] = useState([]);
  const [filteredCar, setFilteredCar] = useState([]);
  const [driver, setDriver] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [passenger, setPassenger] = useState("");

  // Get Car Data
  useEffect(() => {
    if (carData.cars) {
      setCars(carData.cars);
    }
  }, [carData]);
  
//   check if car available at the time
  const carsAvailabilityTime = (car) => {
    const date = new Date(car.availableAt).getTime();
    const pickUp = new Date(`${pickUpDate} ${pickUpTime}`).getTime()
    return date <= pickUp ? true : false
  }

//   check if car have enough seat
  const filterPassenger = (car) => {
    return car.capacity >= passenger ? true : false
  }

  const filterCars = () => {

    const carArraydata = []
    if (cars.length > 0) {
        cars.filter((car) => {
            console.log(carsAvailabilityTime(car))
            if(car.available && filterPassenger(car) && carsAvailabilityTime(car) || 
                car.available && !passenger && carsAvailabilityTime(car) || 
                car.available && filterPassenger(car) && carsAvailabilityTime(car) ||
                car.available && !pickUpDate && !pickUpTime && !passenger
            )
            {
                carArraydata.push(car)
            }
        }); 
      setFilteredCar(carArraydata)
    } else {
      setFilteredCar([cars]);
    }
  };

  useEffect(() => {
    filterCars
  }, [])
  
  return (
    <>
      <div className="container" id="input-form-filter-car">
        <div className="row mx-auto">
        <div className="col-3 my-3"> 
            <label htmlFor="driver-type"><small>Tipe Driver*</small></label>
            <select className="form-select" aria-label="Default select example" id="driver-type" value={driver} onChange={(e) => setDriver(e.target.value)}>
                <option value="default">Pilih Tipe Driver</option>
                <option value="true">Dengan supir</option>
                <option value="false">Tanpa supir</option>
            </select>
            </div>
            <div className="col-2 my-3"> 
            <label htmlFor="start-date"><small>Tanggal*</small></label> 
            <input id="start-date" className="form-control" type="date" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)}/>
            </div>
            <div className="col-2 my-3"> 
            <label htmlFor="pick-up-time"><small>Waktu Jemput/ambil*</small></label>
            <select className="form-select" aria-label="Default select example" id="pick-up-time" value={pickUpTime} onChange={(e) => setPickUpTime(e.target.value)}>
                <option value="false">Pilih waktu</option> 
                <option value="08:00">08.00 WIB</option>
                <option value="09:00">09.00 WIB</option>
                <option value="10:00">10.00 WIB</option>
                <option value="11:00">11.00 WIB</option>
                <option value="12:00">12.00 WIB</option>
            </select>
            </div>
            <div className="col-3 my-3"> 
            <label htmlFor="passenger-num"><small>Jumlah Penumpang (optional)</small></label>
            <input type="number" id="passenger-num" className="form-control" value={passenger} onChange={(e) => setPassenger(e.target.value)}/>
            </div>
          <div className="col-2 my-4">
            <button
              type="submit"
              id="load-btn"
              className="btn btn-success my-3"
              onClick={filterCars} 
              onLoad={filterCars}
            >
              Cari Mobil
            </button>
          </div>
        </div>
      </div>

      {/* Render Card for Car */}
      <section>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-4" id="card-search">
                {filteredCar ? (
                    filteredCar.length > 0 ? (
                        filteredCar.map((car) => (
                        <CardSearch key={car.id} car={car} />
                        ))
                    ) : (
                        <p>No cars found with this filter. *buat run pertama isi input tanggal & time untuk render card</p>
                    )
                    ) : carData.length > 0 ? (
                    carData.map((car) => (
                        <CardSearch key={car.id} car={car} />
                    ))
                    ) : (
                    <p>Loading cars...</p>
                    )}
                </div>
            </div>
        </section>
    </>
  );
}


