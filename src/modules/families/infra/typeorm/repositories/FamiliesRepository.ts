import { getRepository, Repository } from 'typeorm'

import { ICreateFamilyDTO } from '@modules/families/dtos/ICreateFamilyDTO'
import { IFamiliesRepository } from '@modules/families/repositories/IFamiliesRepository'

import { Family } from '../entities/Family'

class FamiliesRepository implements IFamiliesRepository {
	private ormRepository: Repository<Family>

	constructor() {
		this.ormRepository = getRepository(Family)
	}

	async create(data: ICreateFamilyDTO): Promise<Family> {
		const family = this.ormRepository.create(data)

		await this.ormRepository.save(family)

		return family
	}

	async findOneById(familyId: string): Promise<Family | undefined> {
		const family = await this.ormRepository.findOne(familyId)

		return family
	}
}

export { FamiliesRepository }
