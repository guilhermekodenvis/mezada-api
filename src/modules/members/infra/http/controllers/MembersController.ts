import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateMemberService } from '@modules/members/services/CreateMemberService'
import { ShowMemberService } from '@modules/members/services/ShowMemberService'
import { UpdateMemberService } from '@modules/members/services/UpdateMemberService'

class MembersController {
	public async create(request: Request, response: Response): Promise<Response> {
		const createMemberService = container.resolve(CreateMemberService)
		await createMemberService.execute()
		return response.send('Sucesso').status(201)
	}

	public async show(request: Request, response: Response): Promise<Response> {
		const showMemberService = container.resolve(ShowMemberService)
		await showMemberService.execute()
		return response.send('Sucesso').status(201)
	}

	public async update(request: Request, response: Response): Promise<Response> {
		const updateMemberService = container.resolve(UpdateMemberService)
		await updateMemberService.execute()
		return response.send('Sucesso').status(201)
	}
}

export { MembersController }
