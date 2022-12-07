import { ICreateTaskHistoryDTO } from '../dtos/ICreateTaskHistoryDTO'
import { TaskHistory } from '../infra/typeorm/entities/TaskHistory'

interface ITasksHistoryRepository {
	create(data: ICreateTaskHistoryDTO): Promise<TaskHistory>
	findManyByMemberId(memberId: string): Promise<TaskHistory[]>
}

export { ITasksHistoryRepository }
