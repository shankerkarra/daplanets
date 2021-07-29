import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { starsService } from '../services/StarsService'
class GalaxysService {
  async getAll(query = {}) {
    return await dbContext.Galaxys.find(query)
  }

  async getById(id) {
    const galaxy = await dbContext.Galaxys.findById(id)
    if (!galaxy) {
      throw new BadRequest('Invalid Id')
    }
  }

  async getstarsByGalaxyId(req, res, next) {
    try {
      const stars = await starsService.getAll({ galaxyId: req.params.id })
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async create(body) {
    return await dbContext.Galaxys.create(body)
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Galaxys.findByIdAndDelete(id)
  }
}
export const galaxysService = new GalaxysService()
