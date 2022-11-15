import express from 'express'
const router = express.Router()

import { createTask, deleteTaskById, getAllTasks, getTaskById, updateTask } from '../controllers/tasks'

//need to create controller for get all tasks
// router.route("/").get(getAllTask);

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTaskById)

// app.get('/api/v1/tasks') - get all tasks
// app.post('/api/v1/tasks') - create new task
// app.get('/api/v1/tasks:id') - get task by ID
// app.patch('/api/v1/tasks:id') - update task by ID
// app.delete('/api/v1/tasks:id') - delete task by ID

export { router }
