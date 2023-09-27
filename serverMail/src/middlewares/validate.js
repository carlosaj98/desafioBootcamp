const { validationResult } = require('express-validator')

module.exports = (req, res, next) => {
	const { errors } = validationResult(req)

	if (errors.length) {
		const errorMessages = errors.map((error) => ({
			field: error.path,
			msg: error.msg,
		}))
		return res.status(400).json(errorMessages)
	}

	next()
}
