import { Router } from 'express'

import * as ctrl from '#src/controllers/auth-controller.js'
import * as val from '#src/middlewares/validators/auth-validator.js'

const router = Router()

router.post('/sign-in', val.checkSignIn, ctrl.signIn)

export default router
