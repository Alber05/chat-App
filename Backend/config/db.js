import 'dotenv/config'

import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_uri)
    console.log('usuario conectado a la base de datos')
  } catch (error) {
    console.log('Error al conectar a la base de datos')
  }
}

export { connectDB }
