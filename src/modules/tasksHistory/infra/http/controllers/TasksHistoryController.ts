import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateTaskHistoryService } from '@modules/tasksHistory/services/CreateTaskHistoryService'
import { ShowTaskHistoryService } from '@modules/tasksHistory/services/ShowTaskHistoryService'

class TasksHistoryController {
	public async create(request: Request, response: Response): Promise<Response> {
		const createTaskHistoryService = container.resolve(CreateTaskHistoryService)
		await createTaskHistoryService.execute()
		return response.send('Sucesso').status(201)
	}

	public async index(request: Request, response: Response): Promise<Response> {
		const showTaskHistoryService = container.resolve(ShowTaskHistoryService)
		await showTaskHistoryService.execute()
		return response.send('Sucesso').status(201)
	}
}

export { TasksHistoryController }
