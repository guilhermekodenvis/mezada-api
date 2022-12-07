import 'reflect-metadata'
import { MemberKinship } from '../enums/MemberKinship'
import { FakeMembersRepository } from '../repositories/fakes/FakeMembersRepository'
import { IMembersRepository } from '../repositories/IMembersRepository'
import { CreateMemberService } from './CreateMemberService'

let createMemberService: CreateMemberService
let fakeMembersRepository: IMembersRepository

describe('CreateMemberService', () => {
	beforeEach(() => {
		fakeMembersRepository = new FakeMembersRepository()
		createMemberService = new CreateMemberService(fakeMembersRepository)
	})

	it('should be able to create a new member', async () => {
		const member = await createMemberService.execute({
			name: 'Guilherme Sartori',
			profilePicture: 'avatar.png',
			email: 'gui.sartori96@gmail.com',
			phone: '19995545043',
			kinship: MemberKinship.SON,
			familyId: '863b5ffb-f5e2-4c7d-9edb-3a4da6f00fc8',
		})

		expect(member).toHaveProperty('id')
	})
})
