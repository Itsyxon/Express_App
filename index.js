import express, { Router } from 'express'
import router from './routes/app.js'

const app = express()

app.use(router)
app.listen(5000, () => {
  console.log('Start')
})
