import { dbContext } from "../db/DbContext";


class JobsService {
  async getAll() {
    let data = await dbContext.Jobs.find()
    return data
  }

  async getById(id) {
    let data = await dbContext.Jobs.findById(id)
    return data
  }

  async create(body) {
    let data = await dbContext.Jobs.create(body)
    return data
  }

  async edit(id, body) {
    let data = await dbContext.Jobs.findByIdAndUpdate(id, body)
    return data
  }

  async delete(id) {
    let data = await dbContext.Jobs.findByIdAndRemove(id)
    return data
  }
}

export const jobsService = new JobsService()