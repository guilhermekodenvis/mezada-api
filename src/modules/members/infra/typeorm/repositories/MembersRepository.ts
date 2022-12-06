import { getRepository, Repository } from 'typeorm'

import { ICreateMemberDTO } from '@modules/members/dtos/ICreateMemberDTO'
import { IMembersRepository } from '@modules/members/repositories/IMembersRepository'

import { Member } from '../entities/Member'

class MembersRepository implements IMembersRepository {
	private ormRepository: Repository<Member>

	constructor() {
		this.ormRepository = getRepository(Member)
	}

	async create(data: ICreateMemberDTO): Promise<Member> {
		const member = this.ormRepository.create(data)

		await this.ormRepository.save(member)

		return member
	}

	async findOneById(memberId: string): Promise<Member | undefined> {
		const member = await this.ormRepository.findOne(memberId)

		return member
	}

	async update(member: Member): Promise<void> {
		await this.ormRepository.save(member)
	}
}

export { MembersRepository }
