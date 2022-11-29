import { Router } from 'express'

import { FamiliesController } from '@modules/families/infra/http/controllers/FamiliesController'

const familiesController = new FamiliesController()

const familyRouter = Router()

familyRouter.post('/', familiesController.create)

familyRouter.get('/:id', familiesController.show)

export { familyRouter }
