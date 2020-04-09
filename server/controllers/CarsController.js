import express from 'express'
import BaseController from "../utils/BaseController";
import { carsService } from "../services/CarsService";


export class CarsController extends BaseController {
  constructor() {
    super("api/cars")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post('', this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await carsService.getAll()
      res.send({ data: data, message: "This is where the cars live, get you one!" })
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await carsService.getById(req.params.id)
      res.send({ data: data, message: "here it is" })
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await carsService.create(req.body)
      res.send({ data: data, message: "car created!" })
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await carsService.edit(req.params.id, req.body)
      res.send({ data: data, message: "Car editted!" })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      let data = await carsService.delete(req.params.id)
      res.send({ data: data, message: "car deleted!" })
    } catch (error) {
      next(error)
    }
  }

}