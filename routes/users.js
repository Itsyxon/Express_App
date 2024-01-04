import express from 'express'
import { getUsers, getSingleUser, postUsers } from '../contollers/users.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.post('/', postUsers)
userRouter.get('/:userId', getSingleUser)

export default userRouter
