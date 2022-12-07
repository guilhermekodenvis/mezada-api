import { inject, injectable } from 'tsyringe'

import { ICreateFamilyDTO } from '../dtos/ICreateFamilyDTO'
import { Family } from '../infra/typeorm/entities/Family'
import { IFamiliesRepository } from '../repositories/IFamiliesRepository'

@injectable()
class CreateFamilyService {
	constructor(
		@inject('FamiliesRepository')
		private familiesRepository: IFamiliesRepository,
	) {}

	public async execute(data: ICreateFamilyDTO): Promise<Family> {
		const family = await this.familiesRepository.create(data)

		return family
	}
}

export { CreateFamilyService }
