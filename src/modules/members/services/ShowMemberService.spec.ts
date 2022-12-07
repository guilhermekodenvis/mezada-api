import { AppError } from '@shared/erros/AppError'

import 'reflect-metadata'
import { MemberKinship } from '../enums/MemberKinship'
import { FakeMembersRepository } from '../repositories/fakes/FakeMembersRepository'
import { IMembersRepository } from '../repositories/IMembersRepository'
import { ShowMemberService } from './ShowMemberService'

let showMemberService: ShowMemberService
let fakeMembersRepository: IMembersRepository

describe('ShowMemberService', () => {
	beforeEach(() => {
		fakeMembersRepository = new FakeMembersRepository()
		showMemberService = new ShowMemberService(fakeMembersRepository)
	})

	it('should be able to show a member by ID', async () => {
		const member = await fakeMembersRepository.create({
			name: 'Guilherme Sartori',
			profilePicture: 'avatar.png',
			email: 'gui.sartori96@gmail.com',
			phone: '19995545043',
			kinship: MemberKinship.SON,
			familyId: '863b5ffb-f5e2-4c7d-9edb-3a4da6f00fc8',
		})

		const findMember = await showMemberService.execute(member.id)

		expect(member.id).toEqual(findMember.id)
	})

	it('should not be able to show a family if wrong ID', async () => {
		await fakeMembersRepository.create({
			name: 'Guilherme Sartori',
			profilePicture: 'avatar.png',
			email: 'gui.sartori96@gmail.com',
			phone: '19995545043',
			kinship: MemberKinship.SON,
			familyId: '863b5ffb-f5e2-4c7d-9edb-3a4da6f00fc8',
		})

		await expect(
			showMemberService.execute('wrong-member-id'),
		).rejects.toBeInstanceOf(AppError)
	})
})
