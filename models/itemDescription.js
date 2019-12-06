const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const { Schema } = mongoose

const ItemDescription = new Schema({
  name: String,
  price: Number
})

ItemDescription.plugin(AutoIncrement, { inc_field: 'id' })

module.exports = mongoose.model('ItemDescription', ItemDescription)
