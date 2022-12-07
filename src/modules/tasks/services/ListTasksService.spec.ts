import 'reflect-metadata'
import { FakeTasksRepository } from '../repositories/fakes/FakeTasksRepository'
import { ITasksRepository } from '../repositories/ITasksRepository'
import { ListTasksService } from './ListTasksService'

let listTasksService: ListTasksService
let fakeTasksRepository: ITasksRepository

describe('ListTasksService', () => {
	beforeEach(() => {
		fakeTasksRepository = new FakeTasksRepository()
		listTasksService = new ListTasksService(fakeTasksRepository)
	})

	it('should be able to list tasks', async () => {
		const task = await fakeTasksRepository.create({
			taskName: 'Lavar a louça',
			startDate: '08/12/2020',
			executionHour: '18:00',
			value: 5.24,
			isActive: 1,
			createdById: 'a475dee6-6a6c-4d7f-a3fd-24be98de281c',
			familyId: '863b5ffb-f5e2-4c7d-9edb-3a4da6f00fc8',
		})

		const tasks = await listTasksService.execute(task.createdById)

		expect(task.id).toEqual(tasks[0].id)
	})
})
