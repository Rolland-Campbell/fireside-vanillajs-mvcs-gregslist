import express from 'express'
import BaseController from "../utils/BaseController";
import { housesService } from "../services/HousesService";




export class HousesController extends BaseController {
  constructor() {
    super("api/houses")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post('', this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let houses = await housesService.getAll()
      res.send({ data: houses, message: "This is where the houses live, get you one!" })
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await housesService.getById(req.params.id)
      res.send({ data: data, message: "here it is" })
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

  async edit(req, res, next) {
    try {
      let data = await housesService.edit(req.params.id, req.body)
      res.send({ data: data, message: "house editted!" })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      let data = await housesService.delete(req.params.id)
      res.send({ data: data, message: "car deleted!" })
    } catch (error) {
      next(error)
    }
  }

}