import { getRepository, Repository } from 'typeorm'

import { ICreateTaskDTO } from '@modules/tasks/dtos/ICreateTaskDTO'
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository'

import { Task } from '../entities/Task'

class TasksRepository implements ITasksRepository {
	private ormRepository: Repository<Task>

	constructor() {
		this.ormRepository = getRepository(Task)
	}

	async findOne(taskId: string): Promise<Task | undefined> {
		const task = await this.ormRepository.findOne(taskId)

		return task
	}

	async create(data: ICreateTaskDTO): Promise<Task> {
		const task = this.ormRepository.create(data)

		await this.ormRepository.save(task)

		return task
	}

	async findManyByMemberId(memberId: string): Promise<Task[]> {
		const tasks = await this.ormRepository.find({
			where: { createdById: memberId },
		})

		return tasks
	}

	async update(task: Task): Promise<Task> {
		return this.ormRepository.save(task)
	}
}

export { TasksRepository }
