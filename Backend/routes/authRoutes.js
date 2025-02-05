import express from 'express'
import {
  registerUser,
  login,
  verifyEmail
} from '../controllers/authController.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', login)
router.get('/verify/:token', verifyEmail)

export default router
