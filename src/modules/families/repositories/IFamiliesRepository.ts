import { ICreateFamilyDTO } from '../dtos/ICreateFamilyDTO'
import { Family } from '../infra/typeorm/entities/Family'

interface IFamiliesRepository {
	create(data: ICreateFamilyDTO): Promise<Family>
	findOneById(familyId: string): Promise<Family | undefined>
}

export { IFamiliesRepository }
