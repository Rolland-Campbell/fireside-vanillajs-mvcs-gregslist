import express from 'express'
import BaseController from "../utils/BaseController";




export default class CarsController extends BaseController {
  constructor() {
    super("/api/cars")
    this.router
      .get("", this.getAll)
  }

  getAll(req, res, next) {
    let cars = carsService.getAll()
  }

}