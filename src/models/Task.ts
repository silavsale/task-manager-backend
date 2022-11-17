import mongoose from 'mongoose'
const { Schema } = mongoose

const TaskSchema = new Schema({
  task: { type: String, required: [true, 'must provide task'] },
  completed: {
    type: Boolean,
    default: false,
  },
})

export = mongoose.model('Task', TaskSchema)
