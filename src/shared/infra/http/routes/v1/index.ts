import { Router } from 'express'

import { familyRouter } from './family.routes'
import { memberRouter } from './members.routes'
import { tasksRouter } from './tasks.routes'
import { tasksHistoryRouter } from './tasksHistory.routes'

// import usersRouter from '@modules/users/infra/http/routes/users.routes'
// import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

const v1 = Router()

// routes.get('/', ensureAuthenticated, (req, res) => res.send('eae parcero!!!'))

// routes.use('/users', usersRouter)

v1.use('/families', familyRouter)
v1.use('/members', memberRouter)
v1.use('/tasks', tasksRouter)
v1.use('/tasks-history', tasksHistoryRouter)

export { v1 }
