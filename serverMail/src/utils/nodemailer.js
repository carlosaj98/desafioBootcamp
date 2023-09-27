const nodemailer = require("nodemailer")
//password: vabf msdx rxvq ipjv

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "desafioculturalfit@gmail.com",
    pass: process.env.PASS_NODEMAILER,
  },
})
const sendDataEmail = (to_email, to_name, filename, filecontent) =>
  transporter.sendMail({
    from: "desafioculturalfit@gmail.com",
    to: to_email,
    subject: `Email de prueba`,
    html: `<strong>Hola ${to_name}</strong> esto es un email de prueba`,
    attachments: [
      {
        filename: filename,
        content: filecontent,
        encoding: "base64",
      },
    ],
  })

exports.sendDataEmail = sendDataEmail
