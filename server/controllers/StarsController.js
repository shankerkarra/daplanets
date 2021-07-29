import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const stars = await starsService.getAll(req.query)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const star = await starsService.getById(req.params.id)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const star = await starsService.create(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
