import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateFamilyService } from '@modules/families/services/CreateFamilyService'
import { ShowFamilyService } from '@modules/families/services/ShowFamilyService'

class FamiliesController {
	public async create(request: Request, response: Response): Promise<Response> {
		const { familyName } = request.body

		const createFamilyService = container.resolve(CreateFamilyService)
		const family = await createFamilyService.execute({ familyName })

		return response.json(family).status(201)
	}

	public async show(request: Request, response: Response): Promise<Response> {
		const { id: familyId } = request.params

		const showFamilyService = container.resolve(ShowFamilyService)
		const family = await showFamilyService.execute(familyId)

		return response.json(family).status(201)
	}
}

export { FamiliesController }
