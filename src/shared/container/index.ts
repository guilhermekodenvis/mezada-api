import { container } from 'tsyringe'

import { FamiliesRepository } from '@modules/families/infra/typeorm/repositories/FamiliesRepository'
import { IFamiliesRepository } from '@modules/families/repositories/IFamiliesRepository'
import { MembersRepository } from '@modules/members/infra/typeorm/repositories/MembersRepository'
import { IMembersRepository } from '@modules/members/repositories/IMembersRepository'
import { TasksRepository } from '@modules/tasks/infra/typeorm/repositories/TasksRepository'
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository'
import { TasksHistoryRepository } from '@modules/tasksHistory/infra/typeorm/repositories/TasksHistoryRepository'
import { ITasksHistoryRepository } from '@modules/tasksHistory/repositories/ITasksHistoryRepository'

container.registerSingleton<IFamiliesRepository>(
	'FamiliesRepository',
	FamiliesRepository,
)

container.registerSingleton<IMembersRepository>(
	'MembersRepository',
	MembersRepository,
)

container.registerSingleton<ITasksRepository>(
	'TasksRepository',
	TasksRepository,
)
container.registerSingleton<ITasksHistoryRepository>(
	'TasksHistoryRepository',
	TasksHistoryRepository,
)
