import 'dotenv/config'
import nodemailer from 'nodemailer'

export const sendConfirmationEmail = async (token, user) => {
  const { username, email } = user

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: ' 465',
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: `Nuevo contacto de Blablablapp <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Confirme su cuenta',
      html: `<p>Nombre: Hola!${username}</p><br/><p>Haga clic en el siguiente enlace para confirmar su cuenta</p><br>
      <a href=http://localhost:8080/auth/verify/${token}>Verificar Correo electrónico</a>`
    })

    return new Response(
      JSON.stringify({ message: 'Correo enviado exitosamente' }),
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return new Response(
      JSON.stringify({ message: 'Error al enviar el correo' }),
      { status: 500 }
    )
  }
}
