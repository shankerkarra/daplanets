import { planetsService } from '../services/PlanetsService'
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const stars = await planetsService.getAll(req.query)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const star = await planetsService.getById(req.params.id)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const star = await planetsService.create(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
