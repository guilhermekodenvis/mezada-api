import { getRepository, Repository } from 'typeorm'

import { ICreateTaskHistoryDTO } from '@modules/tasksHistory/dtos/ICreateTaskHistoryDTO'
import { ITasksHistoryRepository } from '@modules/tasksHistory/repositories/ITasksHistoryRepository'

import { TaskHistory } from '../entities/TaskHistory'

class TasksHistoryRepository implements ITasksHistoryRepository {
	private ormRepository: Repository<TaskHistory>

	constructor() {
		this.ormRepository = getRepository(TaskHistory)
	}

	async create(data: ICreateTaskHistoryDTO): Promise<TaskHistory> {
		const taskHistory = this.ormRepository.create(data)

		await this.ormRepository.save(taskHistory)

		return taskHistory
	}

	async findManyByMemberId(memberId: string): Promise<TaskHistory[]> {
		const tasksHistory = await this.ormRepository.find({
			where: {
				concluedById: memberId,
			},
		})

		return tasksHistory
	}
}

export { TasksHistoryRepository }
