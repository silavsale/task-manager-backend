// import tasks from '../tasks.json';
import { NextFunction, Request, Response } from 'express'
import Task from '../models/Task'

const getAllTasks = async (req: Request, res: Response) => {
  console.log('getAllTasks')

  try {
    const allTasks = await Task.find()
    res.status(200).json({ allTasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req: Request, res: Response) => {
  const task = await Task.create(req.body)
  try {
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getTaskById = async (req: Request, res: Response) => {
  try {
    console.log('getTaskById')
    const taskId = req.params.id

    const task = await Task.findOne({ _id: taskId })
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = async (req: Request, res: Response) => {
  console.log('updateTask')

  const taskId = req.params.id

  try {
    const filter = { _id: req.params.id }

    const task = await Task.findOneAndUpdate(filter, req.body, {
      returnOriginal: false,
    })
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const deleteTaskById = async (req: Request, res: Response) => {
  console.log('deleteTaskById')
  const taskId = req.params.id

  try {
    const task = await Task.findOneAndDelete({ _id: taskId })

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` })
    }

    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export { getAllTasks, createTask, getTaskById, deleteTaskById, updateTask }
