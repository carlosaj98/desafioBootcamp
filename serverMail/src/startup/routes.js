require('express-async-errors')
const { json } = require('express')
const morgan = require('morgan')

const errors = require('../middlewares/errors')

module.exports = function (app) {
	app.use(json())
	app.use(morgan('tiny'))
	app.use('/', require('../routes/users'))

	app.get('/ping', (req, res) => {
		res.json('pong')
	})

	app.use(errors)
}
