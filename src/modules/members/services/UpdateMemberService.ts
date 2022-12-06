import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/erros/AppError'

import { IUpdateMemberDTO } from '../dtos/IUpdateMemberDTO'
import { Member } from '../infra/typeorm/entities/Member'
import { IMembersRepository } from '../repositories/IMembersRepository'

@injectable()
class UpdateMemberService {
	constructor(
		@inject('MembersRepository')
		private membersRepository: IMembersRepository,
	) {}
	public async execute(data: IUpdateMemberDTO): Promise<Member> {
		const { bornDate } = data

		const explodedBornDate = bornDate.split('/')

		const memberData = {
			...data,
			bornDate: `${explodedBornDate[2]}-${explodedBornDate[1]}-${explodedBornDate[0]}`,
		}

		const member = await this.membersRepository.findOneById(data.memberId)

		if (!member) throw new AppError('Member not found. Uncorrect memberId.')

		Object.assign(member, memberData)

		await this.membersRepository.update(member)

		return member
	}
}

export { UpdateMemberService }
