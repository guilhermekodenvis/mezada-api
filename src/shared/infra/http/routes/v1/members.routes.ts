import { Router } from 'express'

import { MembersController } from '@modules/members/infra/http/controllers/MembersController'

const membersController = new MembersController()

const memberRouter = Router()

memberRouter.post('/', membersController.create)

memberRouter.get('/:id', membersController.show)

memberRouter.put('/:id', membersController.update)

export { memberRouter }
