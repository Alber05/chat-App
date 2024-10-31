import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const generateJWT = (user) => {
  const { _id, username, email } = user

  return jwt.sign(
    { id: _id, username: username, email: email },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d'
    }
  )
}
