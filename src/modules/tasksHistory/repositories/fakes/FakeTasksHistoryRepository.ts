import { v4 } from 'uuid'

import { ICreateTaskHistoryDTO } from '@modules/tasksHistory/dtos/ICreateTaskHistoryDTO'
import { TaskHistory } from '@modules/tasksHistory/infra/typeorm/entities/TaskHistory'

import { ITasksHistoryRepository } from '../ITasksHistoryRepository'

class FakeTasksHistoryRepository implements ITasksHistoryRepository {
	private tasksHistory: TaskHistory[] = []

	async create(data: ICreateTaskHistoryDTO): Promise<TaskHistory> {
		const taskHistory = new TaskHistory()

		Object.assign(taskHistory, { id: v4() }, data)

		this.tasksHistory.push(taskHistory)

		return taskHistory
	}

	async findManyByMemberId(memberId: string): Promise<TaskHistory[]> {
		const findTasksHistory = this.tasksHistory.filter(
			taskHistory => taskHistory.concluedById === memberId,
		)

		return findTasksHistory
	}
}

export { FakeTasksHistoryRepository }
