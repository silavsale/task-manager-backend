// import tasks from '../tasks.json';
import { Request, Response } from 'express'

const getAllTasks = (req: Request, res: Response) => {
  res.send('get all tasks')
}

const createTask = (req: Request, res: Response) => {
  console.log('req.body', req.body)
  res.json(req.body)
}
const getTaskById = (req: Request, res: Response) => {
  res.send('get task by Id')
}

const updateTask = (req: Request, res: Response) => {
  res.send('update task')
}

const deleteTaskById = (req: Request, res: Response) => {
  res.send('delete task by Id')
}

export { getAllTasks, createTask, getTaskById, deleteTaskById, updateTask }
