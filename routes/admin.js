import express from 'express'
import {
  getAdmin,
  postAdmin,
  getAdminHandler,
  deleteAdmin,
} from '../contollers/admin.js'

const adminRouter = express.Router()

adminRouter.get('/', getAdmin)
adminRouter.post('/', postAdmin)
adminRouter.get('/:adminsId', getAdminHandler)
adminRouter.delete('/:adminsId', deleteAdmin)

export default adminRouter
