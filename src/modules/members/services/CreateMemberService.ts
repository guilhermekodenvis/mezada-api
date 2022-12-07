import { inject, injectable } from 'tsyringe'

import { ICreateMemberDTO } from '../dtos/ICreateMemberDTO'
import { Member } from '../infra/typeorm/entities/Member'
import { IMembersRepository } from '../repositories/IMembersRepository'

@injectable()
class CreateMemberService {
	constructor(
		@inject('MembersRepository')
		private membersRepository: IMembersRepository,
	) {}

	public async execute(data: ICreateMemberDTO): Promise<Member> {
		const member = await this.membersRepository.create(data)

		return member
	}
}

export { CreateMemberService }
