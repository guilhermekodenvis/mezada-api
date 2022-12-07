import 'reflect-metadata'
import { FakeTasksHistoryRepository } from '../repositories/fakes/FakeTasksHistoryRepository'
import { ITasksHistoryRepository } from '../repositories/ITasksHistoryRepository'
import { ListTasksHistoryService } from './ListTasksHistoryService'

let listTasksHistoryService: ListTasksHistoryService
let fakeTasksHistoryRepository: ITasksHistoryRepository

describe('ListTasksService', () => {
	beforeEach(() => {
		fakeTasksHistoryRepository = new FakeTasksHistoryRepository()
		listTasksHistoryService = new ListTasksHistoryService(
			fakeTasksHistoryRepository,
		)
	})

	it('should be able to list tasks history from member by id', async () => {
		const memberId = 'a475dee6-6a6c-4d7f-a3fd-24be98de281c'
		const taskHistory = await fakeTasksHistoryRepository.create({
			picture: 'picture.png',
			taskId: '3db41665-b40b-43d4-a649-6bd01e0148fe',
			concluedById: memberId,
		})

		const tasks = await listTasksHistoryService.execute(memberId)

		expect(taskHistory.id).toEqual(tasks[0].id)
	})
})
