import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    ],
    messages: [
      {
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        content: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }
      }
    ],
    name: {
      type: String,
      required: function () {
        return this.participants.length > 2 // Nombre solo si es un chat grupal
      },
      unique: true // Asegúrate de que los nombres de sala sean únicos
    },
    isGroup: {
      type: Boolean,
      default: false // Indica si es un chat de grupo o privado
    },
    description: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
)

export default mongoose.model('Chat', chatSchema)
