import { dbContext } from "../db/DbContext";


class JobsService {
  async create(body) {
    let data = await dbContext.Jobs.create(body)
    return data
  }

  async getAll() {
    let data = await dbContext.Jobs.find()
    return data
  }
}

export const jobsService = new JobsService()