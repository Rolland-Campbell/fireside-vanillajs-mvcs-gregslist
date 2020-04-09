import { dbContext } from "../db/DbContext";


class JobsService {
  async create(body) {
    let job = await dbContext.Jobs.create(body)
    return job
  }

  async getAll() {
    let Jobs = await dbContext.Jobs.find()
    return Jobs
  }
}

export const jobsService = new JobsService()