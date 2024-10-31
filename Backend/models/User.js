import mongoose from 'mongoose'
import bcrypt from 'bcrypt' // Para la encriptación de contraseñas

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3, // Longitud mínima
      maxlength: 20 // Longitud máxima
    },
    password: {
      type: String,
      required: true,
      minlength: 6 // Longitud mínima
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [
        {
          validator: function (v) {
            // Valida el formato del correo electrónico usando una expresión regular
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
          },
          message: (props) =>
            `${props.value} no es un correo electrónico válido`
        },
        {
          validator: async function (v) {
            // Comprueba si el correo ya existe en la base de datos
            const emailCount = await mongoose.models.User.countDocuments({
              email: v
            })
            return emailCount === 0 // Retorna `true` si el email no está en uso
          },
          message: (props) => `El correo ${props.value} ya está en uso`
        }
      ]
    },
    avatar: {
      type: String, // URL de avatar
      default: '' // Valor por defecto
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Referencias a otros usuarios
    privateChats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat' // Suponiendo que tengas un modelo de 'Chat'
      }
    ],
    createdRooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room' // Suponiendo que tengas un modelo de 'Room'
      }
    ],
    verified: { type: Boolean, default: false }
  },
  { timestamps: true }
)

// Middleware para encriptar la contraseña antes de guardar el usuario
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

// Método para comparar la contraseña durante el inicio de sesión
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

export default mongoose.model('User', userSchema)
