import axios from 'axios'

class CarService {
  constructor() {
    const instance = axios.create(
      {
        baseURL:  'http://localhost:8000',
      });

      this.client = instance
  }

  async getAll() {
      try {
        const {data} = await this.client.get('api/cars');
        return data;
      } catch (error) {
        console.log('Greska', error)
      }

      return []
  }

  delete(id) {
    const index = this.cars.findIndex((car) => car.id === id);

    if (index === -1) {
      return false;
    }

    this.cars.splice(index, 1);

    return true
  }

  create(newCar) {
      this.cars.push({id: this.nextId, ...newCar, products: []});

      this.nextId++;

      return this.cars[this.cars.length-1];
  }

  get(id) {
    return this.cars.find(c => c.id === Number(id))
  }

}

export default new CarService()