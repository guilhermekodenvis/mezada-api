import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/erros/AppError'

import { Member } from '../infra/typeorm/entities/Member'
import { IMembersRepository } from '../repositories/IMembersRepository'

@injectable()
class ShowMemberService {
	constructor(
		@inject('MembersRepository')
		private membersRepository: IMembersRepository,
	) {}
	public async execute(memberId: string): Promise<Member> {
		const member = await this.membersRepository.findOneById(memberId)

		if (!member) throw new AppError('Wrong member ID.')

		return member
	}
}

export { ShowMemberService }
