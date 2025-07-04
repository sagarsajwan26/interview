import Router from 'express'
import { userLogin, userTask } from '../controllers/user.controllers.js'
import { verifyJWT } from '../middleware/VerifyJWT.js'
const router = Router()

router.route('/userLogin').post(userLogin)
router.route('/getTask').get(verifyJWT,userTask)

export default router