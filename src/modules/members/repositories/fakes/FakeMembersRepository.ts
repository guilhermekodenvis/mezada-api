import { v4 } from 'uuid'

import { ICreateMemberDTO } from '@modules/members/dtos/ICreateMemberDTO'
import { Member } from '@modules/members/infra/typeorm/entities/Member'

import { IMembersRepository } from '../IMembersRepository'

class FakeMembersRepository implements IMembersRepository {
	private members: Member[] = []

	async create(data: ICreateMemberDTO): Promise<Member> {
		const member = new Member()

		Object.assign(member, { id: v4() }, data)

		this.members.push(member)

		return member
	}

	async findOneById(memberId: string): Promise<Member | undefined> {
		const findMember = this.members.find(member => member.id === memberId)

		return findMember
	}

	async update(member: Member): Promise<void> {
		const findMemberIndex = this.members.findIndex(
			findMember => findMember.id === member.id,
		)
		this.members[findMemberIndex] = member
	}
}

export { FakeMembersRepository }
