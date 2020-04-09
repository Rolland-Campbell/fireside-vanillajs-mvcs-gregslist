import express from 'express'
import BaseController from "../utils/BaseController";
import { carsService } from "../services/CarsService";


export class CarsController extends BaseController {
  constructor() {
    super("api/cars")
    this.router
      .get("", this.getAll)
      .post('', this.create)
      .put("/:id", this.edit)
  }

  async getAll(req, res, next) {
    try {
      let cars = await carsService.getAll()
      res.send({ data: cars, message: "This is where the cars live, get you one!" })
    } catch (error) {
      next(error)
    }

    //NOTE these are the same
    // carsService.getAll().then(cars=>{
    // res.send(cars)
    // }).catch(err => next(err))
  }

  async create(req, res, next) {
    try {
      let car = await carsService.create(req.body)
      res.send({ data: car, message: "car created!" })
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let carToEdit = await carsService.edit(req.body, req.params.id)
      res.send({ data: carToEdit, message: "Car editted!" })
    } catch (error) {
      next(error)
    }
  }

}