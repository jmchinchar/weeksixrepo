var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var WeekSixSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String
})

WeekSixSchema.plugin(mongoosePaginate)
const WeekSix = mongoose.model('Weeksix', WeekSixSchema)

module.exports = WeekSix;