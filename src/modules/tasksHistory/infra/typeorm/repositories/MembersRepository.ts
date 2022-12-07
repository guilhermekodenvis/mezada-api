import { ICreateTaskHistoryDTO } from '@modules/tasksHistory/dtos/ICreateTaskHistoryDTO'
import { ITasksHistoryRepository } from '@modules/tasksHistory/repositories/ITasksHistoryRepository'

import { TaskHistory } from '../entities/TaskHistory'

class TasksHistoryRepository implements ITasksHistoryRepository {
	create(data: ICreateTaskHistoryDTO): Promise<TaskHistory> {
		throw new Error('Method not implemented.')
	}
	findManyByUserId(id: string): Promise<TaskHistory | undefined> {
		throw new Error('Method not implemented.')
	}
}

export { TasksHistoryRepository }
