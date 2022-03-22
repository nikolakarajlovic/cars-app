import carService from '../services/CarsService';
import React, { useState } from 'react';
// import {Link} from 'react-router-dom';

function AppCars() {

    const [cars, setCars] = useState(carService.getAll())

    return (
        <div>
            <ul>
        {cars.map((car) =>
        <li style={{ border: '1px solid black', marginBottom: '5px', padding: 5, display: 'flex', flexDirection: 'column'}} key={car.id}>
          <span>Brand: {car.brand}</span>
          <span>Model: {car.model}</span>
          <span>Year: {car.year}</span>
          <span>Max speed: {car.maxSpeed}</span>
          <span>Automatic: {car.isAutomatic}</span>
          <span>Engine: {car.engine}</span>
          <span>Doors: {car.numberOfDoors}</span>

          {/* <Link to={`/cars/${car.id}`}>Latest Purchase</Link> */}
          {/* <button onClick={() => deleteCar(car.id)}>Delete</button> */}
        </li>)}
      </ul>
        </div>
      )
}

export default AppCars;
// id, brand, model, year, maxSpeed, isAutomatic, engine, numberOfDoors.