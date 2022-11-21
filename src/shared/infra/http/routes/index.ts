import { Router } from 'express'

// import usersRouter from '@modules/users/infra/http/routes/users.routes'
// import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

const routes = Router()

// routes.get('/', ensureAuthenticated, (req, res) => res.send('eae parcero!!!'))

// routes.use('/users', usersRouter)

routes.get('/', (_, res) => res.json({message: "Olá mundoo!"}))

export default routes