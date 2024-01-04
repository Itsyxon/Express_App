import express from 'express'
import getRoot from '../contollers/root.js'

const rootRouter = express.Router()
rootRouter.get('/', getRoot)
export default rootRouter
