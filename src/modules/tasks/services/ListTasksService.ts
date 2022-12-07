import { inject, injectable } from 'tsyringe'

import { Task } from '../infra/typeorm/entities/Task'
import { ITasksRepository } from '../repositories/ITasksRepository'

@injectable()
class ListTasksService {
	constructor(
		@inject('TasksRepository')
		private tasksRepository: ITasksRepository,
	) {}
	public async execute(memberId: string): Promise<Task[]> {
		const tasks = await this.tasksRepository.findManyByMemberId(memberId)

		return tasks
	}
}

export { ListTasksService }
