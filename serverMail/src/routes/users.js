const express = require('express')

const UserControllers = require('../controllers/users')

const {
	fileValidationSchema,
	upload,
} = require('../models/user')
const validate = require('../middlewares/validate')

const router = express.Router()

router.post(
	'/register',
	upload.single('attachment'),
	fileValidationSchema,
	validate,
	UserControllers.register
)

module.exports = router
