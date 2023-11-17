import express from 'express'
import { isLoggedIn } from '../middlewares/authMiddleware.js'
import { accessChats, addToGroupChat, createGroupChat, fetchChats, removeFromGroupChat, renameGroupChat } from '../controllers/chatControllers.js'

const app = express ()
const router = express.Router()

router.post('/',isLoggedIn,accessChats)
router.get('/',isLoggedIn,fetchChats)
router.post('/group',isLoggedIn,createGroupChat)
router.put('/rename',isLoggedIn,renameGroupChat)
router.put('/groupadd',isLoggedIn,addToGroupChat)
router.put('/groupremove',isLoggedIn,removeFromGroupChat)


export default router