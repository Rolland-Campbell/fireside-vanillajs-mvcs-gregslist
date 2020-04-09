import { dbContext } from "../db/DbContext";


class HousesService {
  async create(body) {
    let house = await dbContext.Houses.create(body)
    return house
  }

  async getAll() {
    let houses = await dbContext.Houses.find()
    return houses
  }
}

export const housesService = new HousesService()