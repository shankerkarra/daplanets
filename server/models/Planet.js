import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Planet = new Schema(
  {
    planet_name: { type: String, required: true },
    planet_description: { type: String, required: true },
    starId: { type: ObjectId, ref: 'Star' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Planet.virtual('star',
  {
    localField: 'starId',
    ref: 'Star',
    foreignField: '_id',
    justOne: true
  })

export default Planet
