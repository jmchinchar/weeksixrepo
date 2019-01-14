var express = require('express')

var router = express.Router()
var weeksixs = require('./api/weeksixs.route')


router.use('/weeksixs', weeksixs);


module.exports = router;