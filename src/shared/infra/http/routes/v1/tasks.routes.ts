import { Router } from 'express'

import { TasksController } from '@modules/tasks/infra/http/controllers/TasksController'

const tasksController = new TasksController()

const tasksRouter = Router()

tasksRouter.get('/', tasksController.index)

tasksRouter.post('/', tasksController.create)

tasksRouter.get('/:id', tasksController.show)

tasksRouter.put('/:id', tasksController.update)

export { tasksRouter }
