import 'reflect-metadata'
import { FakeTasksRepository } from '../repositories/fakes/FakeTasksRepository'
import { ITasksRepository } from '../repositories/ITasksRepository'
import { CreateTaskService } from './CreateTaskService'

let createTaskService: CreateTaskService
let fakeTasksRepository: ITasksRepository

describe('CreateTaskService', () => {
	beforeEach(() => {
		fakeTasksRepository = new FakeTasksRepository()
		createTaskService = new CreateTaskService(fakeTasksRepository)
	})

	it('should be able to create a new task', async () => {
		const task = await createTaskService.execute({
			taskName: 'Lavar a louça',
			startDate: '08/12/2020',
			executionHour: '18:00',
			value: 5.24,
			isActive: 1,
			createdById: 'a475dee6-6a6c-4d7f-a3fd-24be98de281c',
			familyId: '863b5ffb-f5e2-4c7d-9edb-3a4da6f00fc8',
		})

		expect(task).toHaveProperty('id')
	})
})
