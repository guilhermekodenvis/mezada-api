import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/erros/AppError'
import { formatDateToSaveInDatabase } from '@shared/utils/formatDateToSaveInDatabase'

import { IUpdateTaskDTO } from '../dtos/IUpdateTaskDTO'
import { Task } from '../infra/typeorm/entities/Task'
import { ITasksRepository } from '../repositories/ITasksRepository'

@injectable()
class UpdateTaskService {
	constructor(
		@inject('TasksRepository')
		private tasksRepository: ITasksRepository,
	) {}
	public async execute(data: IUpdateTaskDTO): Promise<Task> {
		const { startDate, finishDate } = data

		const taskData = {
			...data,
			startDate: formatDateToSaveInDatabase(startDate),
			finishDate: formatDateToSaveInDatabase(finishDate),
		}

		const task = await this.tasksRepository.findOne(data.taskId)

		if (!task) throw new AppError('Task not found. Uncorrect taskId.')

		Object.assign(task, taskData)

		await this.tasksRepository.update(task)

		return task
	}
}

export { UpdateTaskService }
