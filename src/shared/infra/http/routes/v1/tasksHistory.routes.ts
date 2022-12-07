import { Router } from 'express'

import { TasksHistoryController } from '@modules/tasksHistory/infra/http/controllers/TasksHistoryController'

const tasksHistoryController = new TasksHistoryController()

const tasksHistoryRouter = Router()

tasksHistoryRouter.post('/', tasksHistoryController.create)

tasksHistoryRouter.get('/', tasksHistoryController.index)

export { tasksHistoryRouter }
