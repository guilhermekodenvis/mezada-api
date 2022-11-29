import { ICreateFamilyDTO } from '@modules/families/dtos/ICreateFamilyDTO'
import { IFamiliesRepository } from '@modules/families/repositories/IFamiliesRepository'

import { Family } from '../entities/Family'

class FamiliesRepository implements IFamiliesRepository {
	create(data: ICreateFamilyDTO): Promise<Family> {
		throw new Error('Method not implemented.')
	}
	findOneById(id: string): Promise<Family | undefined> {
		throw new Error('Method not implemented.')
	}
}

export { FamiliesRepository }
