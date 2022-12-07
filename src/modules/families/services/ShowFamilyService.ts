import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/erros/AppError'

import { Family } from '../infra/typeorm/entities/Family'
import { IFamiliesRepository } from '../repositories/IFamiliesRepository'

@injectable()
class ShowFamilyService {
	constructor(
		@inject('FamiliesRepository')
		private familiesRepository: IFamiliesRepository,
	) {}
	public async execute(familyId: string): Promise<Family> {
		const family = await this.familiesRepository.findOneById(familyId)

		if (!family) throw new AppError('Wrong family ID.')

		return family
	}
}

export { ShowFamilyService }
