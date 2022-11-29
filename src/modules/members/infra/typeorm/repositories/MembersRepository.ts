import { ICreateMemberDTO } from '@modules/members/dtos/ICreateMemberDTO'
import { IUpdateMemberDTO } from '@modules/members/dtos/IUpdateMemberDTO'
import { IMembersRepository } from '@modules/members/repositories/IMembersRepository'

import { Member } from '../entities/Member'

class MembersRepository implements IMembersRepository {
	create(data: ICreateMemberDTO): Promise<Member> {
		throw new Error('Method not implemented.')
	}
	findOneById(id: string): Promise<Member | undefined> {
		throw new Error('Method not implemented.')
	}
	update(data: IUpdateMemberDTO): Promise<Member> {
		throw new Error('Method not implemented.')
	}
}

export { MembersRepository }
