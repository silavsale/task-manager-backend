import express from 'express'
const app = express()
const port = 3000

import { router } from './routes/tasks'

app.use(express.json())

app.get('/hello', (req, res) => {
  res.send('Task manager App')
})

app.use('/api/v1/tasks', router)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
