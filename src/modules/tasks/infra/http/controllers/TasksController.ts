import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateTaskService } from '@modules/tasks/services/CreateTaskService'
import { ListTasksService } from '@modules/tasks/services/ListTasksService'
import { ShowTaskService } from '@modules/tasks/services/ShowTaskService'
import { UpdateTaskService } from '@modules/tasks/services/UpdateTaskService'

class TasksController {
	public async index(request: Request, response: Response): Promise<Response> {
		const listTasksService = container.resolve(ListTasksService)
		await listTasksService.execute()
		return response.send('Sucesso').status(201)
	}

	public async create(request: Request, response: Response): Promise<Response> {
		const createTaskService = container.resolve(CreateTaskService)
		await createTaskService.execute()
		return response.send('Sucesso').status(201)
	}

	public async show(request: Request, response: Response): Promise<Response> {
		const showTaskService = container.resolve(ShowTaskService)
		await showTaskService.execute()
		return response.send('Sucesso').status(201)
	}

	public async update(request: Request, response: Response): Promise<Response> {
		const updateTaskService = container.resolve(UpdateTaskService)
		await updateTaskService.execute()
		return response.send('Sucesso').status(201)
	}
}

export { TasksController }
