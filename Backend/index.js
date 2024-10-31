import 'dotenv/config'
import express from 'express'
import { connectDB } from './config/db.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

app.use(express.json())

const port = 8080

connectDB()

app.use('/auth', authRoutes)

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})
