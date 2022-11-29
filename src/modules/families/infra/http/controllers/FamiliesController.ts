import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateFamilyService } from '@modules/families/services/CreateFamilyService'
import { ShowFamilyService } from '@modules/families/services/ShowFamilyService'

class FamiliesController {
	public async create(request: Request, response: Response): Promise<Response> {
		const createFamilyService = container.resolve(CreateFamilyService)
		await createFamilyService.execute()
		return response.send('Sucesso').status(201)
	}

	public async show(request: Request, response: Response): Promise<Response> {
		const showFamilyService = container.resolve(ShowFamilyService)
		await showFamilyService.execute()
		return response.send('Sucesso').status(201)
	}
}

export { FamiliesController }
