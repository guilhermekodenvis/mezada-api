import { inject, injectable } from 'tsyringe'

import { formatDateToSaveInDatabase } from '@shared/utils/formatDateToSaveInDatabase'

import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO'
import { Task } from '../infra/typeorm/entities/Task'
import { ITasksRepository } from '../repositories/ITasksRepository'

@injectable()
class CreateTaskService {
	constructor(
		@inject('TasksRepository')
		private tasksRepository: ITasksRepository,
	) {}
	public async execute(data: ICreateTaskDTO): Promise<Task> {
		const { startDate, finishDate } = data

		const taskData = {
			...data,
			startDate: formatDateToSaveInDatabase(startDate),
			finishDate: formatDateToSaveInDatabase(finishDate),
		} as ICreateTaskDTO

		const task = await this.tasksRepository.create(taskData)

		return task
	}
}

export { CreateTaskService }
