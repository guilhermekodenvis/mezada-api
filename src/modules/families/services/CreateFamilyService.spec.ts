import 'reflect-metadata'

import { FakeFamiliesRepository } from '../repositories/fakes/FakeFamiliesRepository'
import { IFamiliesRepository } from '../repositories/IFamiliesRepository'
import { CreateFamilyService } from './CreateFamilyService'

let createFamilyService: CreateFamilyService
let fakeFamiliesRepository: IFamiliesRepository

describe('CreateFamilyService', () => {
	beforeEach(() => {
		fakeFamiliesRepository = new FakeFamiliesRepository()
		createFamilyService = new CreateFamilyService(fakeFamiliesRepository)
	})

	it('should be able to create a new family', async () => {
		const family = await createFamilyService.execute({
			familyName: 'Sartori',
		})

		expect(family).toHaveProperty('id')
	})
})
