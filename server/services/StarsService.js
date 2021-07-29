import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StarsService {
  async getAll(query = {}) {
    return await dbContext.Stars.find(query)
      .populate('galaxy', 'name')
  }

  async getById(id) {
    const star = await dbContext.Stars.findById(id)
    if (!star) {
      throw new BadRequest('Invalid Id')
    }
  }

  async create(body) {
    return await dbContext.Stars.create(body)
  }
}

export const starsService = new StarsService()
