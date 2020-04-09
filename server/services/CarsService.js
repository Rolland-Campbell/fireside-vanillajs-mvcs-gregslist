import { dbContext } from "../db/DbContext";


class CarsService {
  async getAll() {
    let data = await dbContext.Cars.find()
    return data
  }

  async getById(id) {
    let data = await dbContext.Cars.findById(id)
    return data
  }

  async create(body) {
    let data = await dbContext.Cars.create(body)
    return data
  }

  async edit(id, body) {
    let data = await dbContext.Cars.findByIdAndUpdate(id, body)
    return data
  }

  async delete(id) {
    let data = await dbContext.Cars.findByIdAndRemove(id)
    return data
  }
}

export const carsService = new CarsService()