import { dbContext } from "../db/DbContext";


class HousesService {
  async getAll() {
    let data = await dbContext.Houses.find()
    return data
  }

  async getById(id) {
    let data = await dbContext.Houses.findById(id)
    return data
  }

  async create(body) {
    let data = await dbContext.Houses.create(body)
    return data
  }


  async edit(id, body) {
    let data = await dbContext.Houses.findByIdAndUpdate(id, body)
    return data
  }

  async delete(id) {
    let data = await dbContext.Houses.findByIdAndRemove(id)
    return data
  }
}

export const housesService = new HousesService()