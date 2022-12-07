import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateTaskHistoryService } from '@modules/tasksHistory/services/CreateTaskHistoryService'
import { ListTasksHistoryService } from '@modules/tasksHistory/services/ListTasksHistoryService'

class TasksHistoryController {
	public async create(request: Request, response: Response): Promise<Response> {
		const { picture, taskId, concluedById } = request.body

		const createTaskHistoryService = container.resolve(CreateTaskHistoryService)
		const taskHistory = await createTaskHistoryService.execute({
			picture,
			taskId,
			concluedById,
		})

		return response.json(taskHistory).status(201)
	}

	public async index(request: Request, response: Response): Promise<Response> {
		const { id: memberId } = request.params

		const listTasksHistoryService = container.resolve(ListTasksHistoryService)
		const tasksHistory = await listTasksHistoryService.execute(memberId)

		return response.json(tasksHistory).status(201)
	}
}

export { TasksHistoryController }
