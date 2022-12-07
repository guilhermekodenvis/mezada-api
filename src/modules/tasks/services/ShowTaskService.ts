import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/erros/AppError'

import { Task } from '../infra/typeorm/entities/Task'
import { ITasksRepository } from '../repositories/ITasksRepository'

@injectable()
class ShowTaskService {
	constructor(
		@inject('TasksRepository')
		private tasksRepository: ITasksRepository,
	) {}
	public async execute(taskId: string): Promise<Task> {
		const task = await this.tasksRepository.findOne(taskId)

		if (!task) throw new AppError('Wrong TaskId. Please try again.')

		return task
	}
}

export { ShowTaskService }
