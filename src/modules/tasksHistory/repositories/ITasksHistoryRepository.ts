import { ICreateTaskHistoryDTO } from '../dtos/ICreateTaskHistoryDTO'
import { TaskHistory } from '../infra/typeorm/entities/TaskHistory'

interface ITasksHistoryRepository {
	create(data: ICreateTaskHistoryDTO): Promise<TaskHistory>
	findManyByUserId(id: string): Promise<TaskHistory | undefined>
}

export { ITasksHistoryRepository }
