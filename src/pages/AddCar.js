import React, { useState } from 'react';
import carService from '../services/CarsService';
import {useHistory} from 'react-router-dom';


function AddCar() {
    const history = useHistory();

    const handleYearChange = (e) => {
        setNewCar({
          ...newCar,
          year: e.target.value
        })
      }

    const [cars, setCars] = useState(carService.getAll())

    const [newCar, setNewCar] = useState({
        brand: '',
        model: '',
        year: '',
        maxSpeed: '',
        isAutomatic: '',
        engine: '',
        numberOfDoors: ''
      })

    const addNewCar = (e) => {
        e.preventDefault();
    
        const newCar = carService.add(newCar);
    
        setCars([...cars, newCar])
        setNewCar({
            brand: '',
            model: '',
            year: '',
            maxSpeed: '',
            isAutomatic: '',
            engine: '',
            numberOfDoors: ''
        })
      }
      const handleCancel = () => {
        history.push('/cars');
      }
    
    return(
        <div>
            <form onSubmit={addNewCar} style={{display: 'flex', flexDirection: 'column', width: 200, marginLeft: 15}}>
        <input type="text" value={newCar.brand} placeholder="Brand" onChange={({target}) => setNewCar({...newCar, brand: target.value})}/>
        <input type="text" value={newCar.model} placeholder="Model" onChange={({target}) => setNewCar({...newCar, model: target.value})}/>
        
        {/* <input type="text" value={newCar.year} placeholder="Year of make" onChange={({target}) => setNewCar({...newCar, year: target.value})}/> */}
        Year of make:
        <select name="Year" onChange={handleYearChange} value={newCar.year}>   
        <option value="1990">1990</option>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
        <option value="1994">1994</option>
        <option value="1995">1995</option>
        <option value="1996">1996</option>
        <option value="1997">1997</option>
        <option value="1998">1998</option>
        <option value="1999">1999</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        </select>
        
        <input type="number" value={newCar.maxSpeed} placeholder="Max speed" onChange={({target}) => setNewCar({...newCar, maxSpeed: target.value})}/>
        
      Check if automatic
        <input type="checkbox" value="no" onChange={(value="yes") => setNewCar({...newCar, isAutomatic: value})}/>
        
        {/* <input type="text" value={newCar.engine} placeholder="Engine" onChange={({target}) => setNewCar({...newCar, engine: target.value})}/> */}
        Engine: <br></br>
        Diesel:<input type="radio"  value="diesel" name="engine" onChange={({target}) => setNewCar({...newCar, engine: target.value})}/>
        Petrol:<input type="radio" value="petrol" name="engine" onChange={({target}) => setNewCar({...newCar, engine: target.value})}/> 
        Electric:<input type="radio" value="electric" name="engine" onChange={({target}) => setNewCar({...newCar, engine: target.value})}/> 
        Hybrid:<input type="radio" value="hybrid" name="hybrid" onChange={({target}) => setNewCar({...newCar, engine: target.value})}/> 
        
  

        
        
        
        <input type="number" value={newCar.numberOfDoors} placeholder="Number of doors" onChange={({target}) => setNewCar({...newCar, numberOfDoors: target.value})}/>
        <button onClick={handleCancel}>Add car</button>
      </form>
        </div>
    );
}

export default AddCar;



