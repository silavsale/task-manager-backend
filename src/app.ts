import express from 'express'
const app = express()
import * as dotenv from 'dotenv'
import { connectDB } from './db/connect'
dotenv.config()
import { router } from './routes/tasks'

const port = process.env.PORT || 3000
const url = process.env.MONGO_URI

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
