import express from 'express'
import { allUsers, authUser, registerUser } from '../controllers/userControllers.js'
import { isLoggedIn } from '../middlewares/authMiddleware.js'
const app = express ()
const router = express.Router()

router.post('/',registerUser)
router.post('/login',authUser)
router.get('/',isLoggedIn,allUsers)




export default router