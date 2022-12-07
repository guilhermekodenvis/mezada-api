import { v4 } from 'uuid'

import { ICreateFamilyDTO } from '@modules/families/dtos/ICreateFamilyDTO'
import { Family } from '@modules/families/infra/typeorm/entities/Family'

import { IFamiliesRepository } from '../IFamiliesRepository'

class FakeFamiliesRepository implements IFamiliesRepository {
	private families: Family[] = []

	async create(data: ICreateFamilyDTO): Promise<Family> {
		const family = new Family()

		Object.assign(family, { id: v4() }, data)

		this.families.push(family)

		return family
	}

	async findOneById(familyId: string): Promise<Family | undefined> {
		const findProduct = this.families.find(family => family.id === familyId)

		return findProduct
	}
}

export { FakeFamiliesRepository }
