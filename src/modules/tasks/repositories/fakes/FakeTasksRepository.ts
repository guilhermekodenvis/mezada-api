import { v4 } from 'uuid'

import { ICreateTaskDTO } from '../../dtos/ICreateTaskDTO'
import { Task } from '../../infra/typeorm/entities/Task'
import { ITasksRepository } from '../ITasksRepository'

class FakeTasksRepository implements ITasksRepository {
	private tasks: Task[] = []

	async create(data: ICreateTaskDTO): Promise<Task> {
		const task = new Task()

		Object.assign(task, { id: v4() }, data)

		this.tasks.push(task)

		return task
	}

	async findManyByMemberId(memberId: string): Promise<Task[]> {
		const findTasks = this.tasks.filter(
			task =>
				task.assignedId === undefined ||
				task.createdById === memberId ||
				task.assignedId === memberId,
		)

		return findTasks
	}

	async findOne(taskId: string): Promise<Task | undefined> {
		const findTask = this.tasks.find(task => task.id === taskId)

		return findTask
	}

	async update(task: Task): Promise<Task> {
		const findTaskIndex = this.tasks.findIndex(
			findTask => findTask.id === task.id,
		)
		this.tasks[findTaskIndex] = task
		return this.tasks[findTaskIndex]
	}
}

export { FakeTasksRepository }
