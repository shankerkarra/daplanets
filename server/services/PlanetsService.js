import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PlanetsService {
  async getAll(query = {}) {
    return await dbContext.Planets.find(query)
      .populate('star', 'star_name')
  }

  async getById(id) {
    const planet = await dbContext.Planets.findById(id)
    if (!planet) {
      throw new BadRequest('Invalid Id')
    }
  }

  async create(body) {
    return await dbContext.Planets.create(body)
  }
}

export const planetsService = new PlanetsService()
