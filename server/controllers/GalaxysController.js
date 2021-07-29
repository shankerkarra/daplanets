import BaseController from '../utils/BaseController'
import { galaxysService } from '../services/GalaxysService'
import { starsService } from '../services/StarsService'

export class GalaxysController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/stars', this.getstarsByGalaxyId)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const galaxys = await galaxysService.getAll(req.query)
      res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const galaxy = await galaxysService.getById(req.params.id)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getstarsByGalaxyId(req, res, next) {
    try {
      const assignments = await starsService.getAll({ galaxyId: req.params.id })
      res.send(assignments)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const galaxy = await galaxysService.create(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const galaxy = await galaxysService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
