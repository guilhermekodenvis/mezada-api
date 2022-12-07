import { AppError } from '@shared/erros/AppError'

import 'reflect-metadata'
import { FakeTasksRepository } from '../repositories/fakes/FakeTasksRepository'
import { ITasksRepository } from '../repositories/ITasksRepository'
import { UpdateTaskService } from './UpdateTaskService'

let updateTaskService: UpdateTaskService
let fakeTasksRepository: ITasksRepository

describe('UpdateTaskService', () => {
	beforeEach(() => {
		fakeTasksRepository = new FakeTasksRepository()
		updateTaskService = new UpdateTaskService(fakeTasksRepository)
	})

	it('should be able to update task data', async () => {
		const pastTaskName = 'Lavar a louça'

		const task = await fakeTasksRepository.create({
			taskName: pastTaskName,
			startDate: '08/12/2020',
			executionHour: '18:00',
			value: 5.24,
			isActive: 1,
			createdById: 'a475dee6-6a6c-4d7f-a3fd-24be98de281c',
			familyId: '863b5ffb-f5e2-4c7d-9edb-3a4da6f00fc8',
		})

		const updatedTask = await updateTaskService.execute({
			taskId: task.id,
			taskName: 'Updated Task Name',
			startDate: '08/12/2020',
			executionHour: '18:00',
			value: 5.24,
			isActive: 1,
		})

		expect(updatedTask.taskName).not.toEqual(pastTaskName)
	})

	it('should not be able to update member data if wrong TaskId', async () => {
		const pastTaskName = 'Lavar a louça'

		await fakeTasksRepository.create({
			taskName: pastTaskName,
			startDate: '08/12/2020',
			executionHour: '18:00',
			value: 5.24,
			isActive: 1,
			createdById: 'a475dee6-6a6c-4d7f-a3fd-24be98de281c',
			familyId: '863b5ffb-f5e2-4c7d-9edb-3a4da6f00fc8',
		})

		await expect(
			updateTaskService.execute({
				taskId: 'wrong-task-id',
				taskName: pastTaskName,
				startDate: '08/12/2020',
				executionHour: '18:00',
				value: 5.24,
				isActive: 1,
			}),
		).rejects.toBeInstanceOf(AppError)
	})
})
