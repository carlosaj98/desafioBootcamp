
const { body } = require('express-validator')
const createUploader = require('../utils/multer')

const FILE_TYPES = {
	'application/pdf': 'pdf',
}

const validateFile = (type) => FILE_TYPES[type]

const fileValidationSchema = [
	body('attachment')
		.custom((_, { req }) => req.file)
		.withMessage('El archivo es obligatorio')
		.custom((_, { req }) => validateFile(req.file.mimetype))
		.withMessage(
			'El archivo debe estar en uno de los formatos permitidos ' +
				Object.values(FILE_TYPES).join('/')
		),
]


exports.fileValidationSchema = fileValidationSchema
exports.upload = createUploader(validateFile)
