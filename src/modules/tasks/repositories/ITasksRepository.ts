import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO'
import { Task } from '../infra/typeorm/entities/Task'

interface ITasksRepository {
	create(data: ICreateTaskDTO): Promise<Task>
	findManyByMemberId(memberId: string): Promise<Task[]>
	findOne(taskId: string): Promise<Task | undefined>
	update(task: Task): Promise<Task>
}

export { ITasksRepository }
