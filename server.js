var express = require('express')
var api = require('./api/api')

var app = express()

app.use('/v1/rot13', api)

var port = process.env.PORT || 9001

app.listen(port)
console.log('listening on port ' + port)

module.exports = app
