import { Router } from 'express'

// import { verifyJWT } from '#src/middlewares/auth.js'
import * as ctrl from '#src/controllers/category-controller.js'
import * as val from '#src/middlewares/validators/category-validator.js'

const router = Router()

router.get('/', val.checkGet, ctrl.fetchCategories)

export default router
