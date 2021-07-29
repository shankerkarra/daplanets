// import ValueSchema from '../models/Value'
import mongoose from 'mongoose'
import GalaxySchema from '../models/Galaxy'
import StarSchema from '../models/Star'
import PlanetSchema from '../models/Planet'
class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  Galaxys = mongoose.model('Galaxy', GalaxySchema)
  Stars = mongoose.model('Star', StarSchema)

  Planets = mongoose.model('Planet', PlanetSchema)
}

export const dbContext = new DbContext()
