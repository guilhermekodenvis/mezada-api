import { ICreateMemberDTO } from '../dtos/ICreateMemberDTO'
import { Member } from '../infra/typeorm/entities/Member'

interface IMembersRepository {
	create(data: ICreateMemberDTO): Promise<Member>
	findOneById(memberId: string): Promise<Member | undefined>
	update(member: Member): Promise<void>
}

export { IMembersRepository }
