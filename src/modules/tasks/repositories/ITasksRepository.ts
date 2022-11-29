import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO'
import { IUpdateTaskDTO } from '../dtos/IUpdateTaskDTO'
import { Task } from '../infra/typeorm/entities/Task'

interface ITasksRepository {
	create(data: ICreateTaskDTO): Promise<Task>
	findManyByUserId(id: string): Promise<Task[]>
	update(data: IUpdateTaskDTO): Promise<Task>
}

export { ITasksRepository }
