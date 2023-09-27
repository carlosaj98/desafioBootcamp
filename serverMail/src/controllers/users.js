const { sendDataEmail } = require("../utils/nodemailer")

const register = async (req, res) => {
  const response = {
    body: req.body,
    file: req.file,
  }
  sendDataEmail(
    response.body.email,
		response.body.name,
    response.file.originalname,
    response.file.buffer
  )
  res.send(response)
}

module.exports = {
  register,
}
