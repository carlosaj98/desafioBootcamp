const multer = require('multer')

const storage = multer.memoryStorage()

module.exports = (validateType) =>
	multer({
		storage,
		fileFilter: function (req, file, cb) {
			if (validateType(file.mimetype)) return cb(null, true)

			cb(null, false)
		},
	})
