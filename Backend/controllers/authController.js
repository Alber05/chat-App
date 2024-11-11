import User from '../models/User.js'
import jwt from 'jsonwebtoken'

import 'dotenv/config'
import { sendConfirmationEmail } from '../services/authServices.js'
import { generateJWT } from '../helpers/generateJWT.js'

export const registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body

    const newUser = new User({ username, password, email })

    await newUser.save()

    const token = generateJWT(newUser)

    await sendConfirmationEmail(token, newUser)

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
      }
    })
  } catch (error) {
    // Si hay un error de validación, se puede capturar y manejar
    if (error.name === 'ValidationError') {
      return res
        .status(400)
        .json({ message: 'Error de validación', errors: error.errors })
    }

    res
      .status(500)
      .json({ message: 'Error al registrar el usuario', error: error.message })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email: email })

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    const correctPassword = await user.comparePassword(password)

    if (!correctPassword) {
      return res.status(400).json({ message: 'Contraseña incorrecta' })
    }

    if (!user.verified) {
      return res.status(400).json({ message: 'El usuario no ha sido validado' })
    }

    const token = generateJWT(user)

    res.status(201).json({
      message: 'Usuario logeado con éxito',
      user: {
        username: user.username,
        email: user.email,
        token: token
      }
    })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

export const verifyEmail = async (req, res) => {
  const token = req.params.token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id) // Aquí busca el usuario por ID.

    if (!user) {
      return res.status(404).send('Usuario no encontrado.')
    }

    if (user.verified) {
      return res.status(400).send('El correo ya ha sido verificado.')
    }

    user.verified = true

    await user.save({ validateBeforeSave: false })

    res.send('Correo verificado exitosamente.')
  } catch (error) {
    console.error('Error en la verificación del token:', error) // Agregar log para ayudar a depurar
    res
      .status(400)
      .send('Error al verificar el correo. Token inválido o expirado.')
  }
}
