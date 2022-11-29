import { ICreateMemberDTO } from '../dtos/ICreateMemberDTO'
import { IUpdateMemberDTO } from '../dtos/IUpdateMemberDTO'
import { Member } from '../infra/typeorm/entities/Member'

interface IMembersRepository {
	create(data: ICreateMemberDTO): Promise<Member>
	findOneById(id: string): Promise<Member | undefined>
	update(data: IUpdateMemberDTO): Promise<Member>
}

export { IMembersRepository }
