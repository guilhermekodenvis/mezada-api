import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateTaskService } from '@modules/tasks/services/CreateTaskService'
import { ListTasksService } from '@modules/tasks/services/ListTasksService'
import { ShowTaskService } from '@modules/tasks/services/ShowTaskService'
import { UpdateTaskService } from '@modules/tasks/services/UpdateTaskService'
import { AppError } from '@shared/erros/AppError'

class TasksController {
	public async index(request: Request, response: Response): Promise<Response> {
		// TODO: transform it in user.id
		const { memberId } = request.query

		if (!memberId)
			throw new AppError(
				'Wrong memberId. You need to insert it in query params.',
			)

		const listTasksService = container.resolve(ListTasksService)
		const tasks = await listTasksService.execute(memberId.toString())

		return response.json(tasks).status(201)
	}

	public async create(request: Request, response: Response): Promise<Response> {
		const {
			taskName,
			startDate,
			executionHour,
			frequency,
			frequencyKind,
			weekdayRepeat,
			monthDayRepeat,
			finishDate,
			value,
			isActive,
			assignedId,
			createdById,
			familyId,
		} = request.body

		const createTaskService = container.resolve(CreateTaskService)
		const task = await createTaskService.execute({
			taskName,
			startDate,
			executionHour,
			frequency,
			frequencyKind,
			weekdayRepeat,
			monthDayRepeat,
			finishDate,
			value,
			isActive,
			assignedId,
			createdById,
			familyId,
		})

		return response.json(task).status(201)
	}

	public async show(request: Request, response: Response): Promise<Response> {
		const { id: taskId } = request.params

		const showTaskService = container.resolve(ShowTaskService)
		const task = await showTaskService.execute(taskId)

		return response.json(task).status(201)
	}

	public async update(request: Request, response: Response): Promise<Response> {
		const { id: taskId } = request.params
		const {
			taskName,
			startDate,
			executionHour,
			frequency,
			frequencyKind,
			weekdayRepeat,
			monthDayRepeat,
			finishDate,
			value,
			isActive,
			assignedId,
		} = request.body

		const updateTaskService = container.resolve(UpdateTaskService)
		const task = await updateTaskService.execute({
			taskId,
			taskName,
			startDate,
			executionHour,
			frequency,
			frequencyKind,
			weekdayRepeat,
			monthDayRepeat,
			finishDate,
			value,
			isActive,
			assignedId,
		})

		return response.json(task).status(201)
	}
}

export { TasksController }
