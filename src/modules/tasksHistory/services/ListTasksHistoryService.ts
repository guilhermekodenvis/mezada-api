import { inject, injectable } from 'tsyringe'

import { TaskHistory } from '../infra/typeorm/entities/TaskHistory'
import { ITasksHistoryRepository } from '../repositories/ITasksHistoryRepository'

@injectable()
class ListTasksHistoryService {
	constructor(
		@inject('TasksHistoryRepository')
		private tasksHistoryRepository: ITasksHistoryRepository,
	) {}
	public async execute(memberId: string): Promise<TaskHistory[]> {
		const tasksHistory = await this.tasksHistoryRepository.findManyByMemberId(
			memberId,
		)

		return tasksHistory
	}
}

export { ListTasksHistoryService }
