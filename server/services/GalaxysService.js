import mongoose from 'mongoose'
const schema = mongoose.Schema

const Galaxy = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  }
)
export default Galaxy
