import express from 'express'
import adminRouter from './admin.js'
import userRouter from './users.js'
import rootRouter from './root.js'

const router = express.Router()

router.use('/admins', adminRouter)
router.use('/users', userRouter)
router.use('/', rootRouter)

export default router
