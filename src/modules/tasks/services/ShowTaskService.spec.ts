import { AppError } from '@shared/erros/AppError'

import 'reflect-metadata'
import { FakeTasksRepository } from '../repositories/fakes/FakeTasksRepository'
import { ITasksRepository } from '../repositories/ITasksRepository'
import { ShowTaskService } from './ShowTaskService'

let showTaskService: ShowTaskService
let fakeTasksRepository: ITasksRepository

describe('ShowTaskService', () => {
	beforeEach(() => {
		fakeTasksRepository = new FakeTasksRepository()
		showTaskService = new ShowTaskService(fakeTasksRepository)
	})

	it('should be able to show a task', async () => {
		const task = await fakeTasksRepository.create({
			taskName: 'Lavar a louça',
			startDate: '08/12/2020',
			executionHour: '18:00',
			value: 5.24,
			isActive: 1,
			createdById: 'a475dee6-6a6c-4d7f-a3fd-24be98de281c',
			familyId: '863b5ffb-f5e2-4c7d-9edb-3a4da6f00fc8',
		})

		const findTask = await showTaskService.execute(task.id)

		expect(task.id).toEqual(findTask.id)
	})

	it('should not be able to show a task if wrong taskId', async () => {
		await fakeTasksRepository.create({
			taskName: 'Lavar a louça',
			startDate: '08/12/2020',
			executionHour: '18:00',
			value: 5.24,
			isActive: 1,
			createdById: 'a475dee6-6a6c-4d7f-a3fd-24be98de281c',
			familyId: '863b5ffb-f5e2-4c7d-9edb-3a4da6f00fc8',
		})

		await expect(
			showTaskService.execute('wrong-task-id'),
		).rejects.toBeInstanceOf(AppError)
	})
})
