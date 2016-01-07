var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  if (req.query.data) {
    console.log('data: ' + req.query.data)
    res.json({ message: r(req.query.data) })
  } else {
    res.json({ message: 'This is the rot13 API.' })
  }
})

function r (a, b) {
  return ++b ? String.fromCharCode((a < '[' ? 91 : 123) > (a = a.charCodeAt() + 13) ? a : a - 26) : a.replace(/[A-z]/g, r)
}

module.exports = router
