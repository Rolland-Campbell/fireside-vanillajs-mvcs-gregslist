import express from 'express'
import BaseController from "../utils/BaseController";
import { jobsService } from "../services/jobsService";




export class JobsController extends BaseController {
  constructor() {
    super("api/jobs")
    this.router
      .get("", this.getAll)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      let data = await jobsService.getAll()
      res.send({ data: data, message: "This is where the jobs live, get you one!" })
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await jobsService.create(req.body)
      res.send({ data: data, message: "job created!" })
    } catch (err) {
      next(err)
    }
  }



}