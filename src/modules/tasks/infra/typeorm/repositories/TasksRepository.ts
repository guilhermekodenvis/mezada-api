import { ICreateTaskDTO } from '@modules/tasks/dtos/ICreateTaskDTO'
import { IUpdateTaskDTO } from '@modules/tasks/dtos/IUpdateTaskDTO'
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository'

import { Task } from '../entities/Task'

class TasksRepository implements ITasksRepository {
	create(data: ICreateTaskDTO): Promise<Task> {
		throw new Error('Method not implemented.')
	}
	findManyByUserId(id: string): Promise<Task[]> {
		throw new Error('Method not implemented.')
	}
	update(data: IUpdateTaskDTO): Promise<Task> {
		throw new Error('Method not implemented.')
	}
}

export { TasksRepository }
