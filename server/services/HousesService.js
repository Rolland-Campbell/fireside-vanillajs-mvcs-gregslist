import { dbContext } from "../db/DbContext";


class HousesService {
  async getAll() {
    let houses = await dbContext.Houses.find()
    return houses
  }

  async getById(id) {
    let data = await dbContext.Houses.findById(id)
    return data
  }

  async create(body) {
    let house = await dbContext.Houses.create(body)
    return house
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