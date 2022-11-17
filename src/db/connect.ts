import mongoose, { Schema } from 'mongoose'

const connectDB = (url: any) => {
  mongoose.connect(url).then(
    () => {
      console.log('connected')
    },
    (err) => {
      console.log(err)
    },
  )
}

export { connectDB }
