var express = require('express')

var router = express.Router()


var WeekSixController = require('../../controllers/weeksix.controller.js');


router.get('/', WeekSixController.getWeeksixs)

router.post('/', WeekSixController.createWeeksix)

router.put('/', WeekSixController.updateWeeksix)

router.delete('/:id',WeekSixController.removeWeeksix)


module.exports = router;