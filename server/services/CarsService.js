import { dbContext } from "../db/DbContext";


class CarsService {
  async getAll() {
    let data = await dbContext.Cars.find() //go to the cars endpoint and find all the objects.
    return data
  }

  async getById(id) {
    let data = await dbContext.Cars.findById(id) //go to the cars endpoint and find the object with this id.
    return data
  }

  async create(body) {
    let data = await dbContext.Cars.create(body) //create a new db object using this pojo(body)
    return data
  }

  async edit(id, body) {
    let data = await dbContext.Cars.findByIdAndUpdate(id, body) //go to db, find the object with this id, and update it with this pojo(body) information
    return data
  }

  async delete(id) {
    let data = await dbContext.Cars.findByIdAndRemove(id) //go to the db, find this object with this id, and delete it.
    return data
  }
}

export const carsService = new CarsService()