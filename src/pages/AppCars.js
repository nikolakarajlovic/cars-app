import carService from '../services/CarsService';
import React, { useState } from 'react';

function AppCars() {

    const [cars, setCars] = useState(carService.getAll())

    return (
        <div>
            <p>dasdasda</p>
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
        </li>)}
      </ul>
      
        </div>
      )
}

export default AppCars;
