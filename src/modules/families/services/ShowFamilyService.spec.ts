import { AppError } from '@shared/erros/AppError'
import 'reflect-metadata'

import { FakeFamiliesRepository } from '../repositories/fakes/FakeFamiliesRepository'
import { IFamiliesRepository } from '../repositories/IFamiliesRepository'
import { ShowFamilyService } from './ShowFamilyService'

let showFamilyService: ShowFamilyService
let fakeFamiliesRepository: IFamiliesRepository

describe('ShowFamilyService', () => {
	beforeEach(() => {
		fakeFamiliesRepository = new FakeFamiliesRepository()
		showFamilyService = new ShowFamilyService(fakeFamiliesRepository)
	})

	it('should be able to show a family by ID', async () => {
		const family = await fakeFamiliesRepository.create({
			familyName: 'Sartori',
		})

		const findFamily = await showFamilyService.execute(family.id)

		expect(family.id).toEqual(findFamily.id)
	})

	it('should not be able to show a family if wrong ID', async () => {
		await fakeFamiliesRepository.create({
			familyName: 'Sartori',
		})

		await expect(
			showFamilyService.execute('wrong-family-id'),
		).rejects.toBeInstanceOf(AppError)
	})
})
