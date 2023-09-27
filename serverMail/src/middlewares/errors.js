const winston = require('winston')

module.exports = function (err, req, res, next) {
	// Aquí lógica para errores 500

	winston.error('[500]', err)

	res.status(500).send('Estamos trabajando para volver lo antes posible.')
}
