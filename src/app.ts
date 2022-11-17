import express from 'express'
const app = express()
const port = 3000
import { connectDB } from './db/connect'

import * as dotenv from 'dotenv'
dotenv.config()
console.log(typeof process.env.MONGO_URI, typeof '')
const url = process.env.MONGO_URI

import { router } from './routes/tasks'

app.use(express.json())

app.use('/api/v1/tasks', router)

const start = async () => {
  try {
    await connectDB(url)
    app.listen(port, () => {
      console.log(`Express is listening at http://localhost:${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
