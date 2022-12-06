import { AppError } from '@shared/erros/AppError'

import 'reflect-metadata'
import { MemberKinship } from '../enums/MemberKinship'
import { FakeMembersRepository } from '../repositories/fakes/FakeMembersRepository'
import { IMembersRepository } from '../repositories/IMembersRepository'
import { CreateMemberService } from './CreateMemberService'
import { UpdateMemberService } from './UpdateMemberService'

let updateMemberService: UpdateMemberService
let fakeMembersRepository: IMembersRepository

describe('UpdateMemberService', () => {
	beforeEach(() => {
		fakeMembersRepository = new FakeMembersRepository()
		updateMemberService = new UpdateMemberService(fakeMembersRepository)
	})

	it('should be able to update member data', async () => {
		const pastMemberName = 'Guilherme Sartori'

		const member = await fakeMembersRepository.create({
			name: pastMemberName,
			profilePicture: 'avatar.png',
			email: 'gui.sartori96@gmail.com',
			phone: '19995545043',
			kinship: MemberKinship.SON,
			familyId: '863b5ffb-f5e2-4c7d-9edb-3a4da6f00fc8',
		})

		const updatedMember = await updateMemberService.execute({
			memberId: member.id,
			name: 'Changed Name',
			profilePicture: 'changed-avatar.png',
			bornDate: '15/03/1996',
			email: 'gui.sartori96@gmail.com',
			phone: '19995545043',
			status: 'Hoje é dia de vencer.',
		})

		expect(updatedMember.name).not.toEqual(pastMemberName)
	})

	it('should not be able to update member data if wrong MemberId', async () => {
		const pastMemberName = 'Guilherme Sartori'

		await fakeMembersRepository.create({
			name: pastMemberName,
			profilePicture: 'avatar.png',
			email: 'gui.sartori96@gmail.com',
			phone: '19995545043',
			kinship: MemberKinship.SON,
			familyId: '863b5ffb-f5e2-4c7d-9edb-3a4da6f00fc8',
		})

		await expect(
			updateMemberService.execute({
				memberId: 'wrong-member-id',
				name: 'Changed Name',
				profilePicture: 'changed-avatar.png',
				bornDate: '15/03/1996',
				email: 'gui.sartori96@gmail.com',
				phone: '19995545043',
				status: 'Hoje é dia de vencer.',
			}),
		).rejects.toBeInstanceOf(AppError)
	})
})
