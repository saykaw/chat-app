import express from 'express'
import { isLoggedIn } from '../middlewares/authMiddleware.js'
import { allMessages, sendMessage } from '../controllers/messageControllers.js'

const app = express ()
const router = express.Router()

// router.route('/').post(isLoggedIn,sendMessage)
//router.route('/:chatId').post(isLoggedIn,allMessages)

router.post('/',isLoggedIn,sendMessage)
router.get('/:chatId',isLoggedIn,allMessages)

export default router