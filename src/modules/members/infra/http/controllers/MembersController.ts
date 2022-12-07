import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateMemberService } from '@modules/members/services/CreateMemberService'
import { ShowMemberService } from '@modules/members/services/ShowMemberService'
import { UpdateMemberService } from '@modules/members/services/UpdateMemberService'

class MembersController {
	public async create(request: Request, response: Response): Promise<Response> {
		const { name, profilePicture, email, phone, kinship, familyId } =
			request.body

		const createMemberService = container.resolve(CreateMemberService)
		const member = await createMemberService.execute({
			name,
			profilePicture,
			email,
			phone,
			kinship,
			familyId,
		})

		return response.json(member).status(201)
	}

	public async show(request: Request, response: Response): Promise<Response> {
		const { id: memberId } = request.params

		const showMemberService = container.resolve(ShowMemberService)
		const member = await showMemberService.execute(memberId)

		return response.json(member).status(201)
	}

	public async update(request: Request, response: Response): Promise<Response> {
		const { id: memberId } = request.params

		const { name, profilePicture, bornDate, email, phone, status } =
			request.body

		const updateMemberService = container.resolve(UpdateMemberService)
		const member = await updateMemberService.execute({
			memberId,
			name,
			profilePicture,
			bornDate,
			email,
			phone,
			status,
		})

		return response.json(member).status(201)
	}
}

export { MembersController }
