import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Star = new Schema(
  {
    star_name: { type: String, required: true },
    star_description: { type: String, required: true },
    galaxyId: { type: ObjectId, ref: 'Galaxy' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Star.virtual('galaxy',
  {
    localField: 'galaxyId',
    ref: 'Galaxy',
    foreignField: '_id',
    justOne: true
  })

export default Star
