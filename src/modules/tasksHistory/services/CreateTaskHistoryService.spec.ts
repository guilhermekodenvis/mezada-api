import 'reflect-metadata'
import { FakeTasksHistoryRepository } from '../repositories/fakes/FakeTasksHistoryRepository'
import { ITasksHistoryRepository } from '../repositories/ITasksHistoryRepository'
import { CreateTaskHistoryService } from './CreateTaskHistoryService'

let createTaskHistoryService: CreateTaskHistoryService
let fakeTasksRepository: ITasksHistoryRepository

describe('CreateTaskHistoryService', () => {
	beforeEach(() => {
		fakeTasksRepository = new FakeTasksHistoryRepository()
		createTaskHistoryService = new CreateTaskHistoryService(fakeTasksRepository)
	})

	it('should be able to create a new task history', async () => {
		const taskHistory = await createTaskHistoryService.execute({
			picture: 'picture.png',
			taskId: '3db41665-b40b-43d4-a649-6bd01e0148fe',
			concluedById: 'a475dee6-6a6c-4d7f-a3fd-24be98de281c',
		})

		expect(taskHistory).toHaveProperty('id')
	})
})
