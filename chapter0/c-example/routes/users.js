var express = require('express')
var router = express.Router()
var qs = require('query-string')

/* GET users listing. */
router.get('/', function (req, res, _next) {
  const quries = qs.stringify(req.query)

  // eslint-disable-next-line no-console, no-restricted-syntax
  console.log(quries)
  res.send('respond with a resource')
})

module.exports = router
