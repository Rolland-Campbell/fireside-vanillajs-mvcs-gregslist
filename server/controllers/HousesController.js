import express from 'express'
import BaseController from "../utils/BaseController";
import { housesService } from "../services/HousesService";




export class HousesController extends BaseController {
  constructor() {
    super("api/houses")
    this.router
      .get("", this.getAll)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      let houses = await housesService.getAll()
      res.send({ data: houses, message: "This is where the houses live, get you one!" })
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let house = await housesService.create(req.body)
      res.send({ data: house, message: "house created!" })
    } catch (err) {
      next(err)
    }
  }



}