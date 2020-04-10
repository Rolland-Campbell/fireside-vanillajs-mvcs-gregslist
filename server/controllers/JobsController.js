import express from 'express'
import BaseController from "../utils/BaseController";
import { jobsService } from "../services/jobsService";




export class JobsController extends BaseController {
  constructor() {
    super("api/jobs")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post('', this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await jobsService.getAll()
      res.send({ data: data, message: "This is where the jobs live, get you one!" })
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await jobsService.getById(req.params.id)
      res.send({ data: data, message: "here it is" })
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

  async edit(req, res, next) {
    try {
      let data = await jobsService.edit(req.params.id, req.body)
      res.send({ data: data, message: "job editted!" })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      let data = await jobsService.delete(req.params.id)
      res.send({ data: data, message: "job deleted!" })
    } catch (error) {
      next(error)
    }
  }

}