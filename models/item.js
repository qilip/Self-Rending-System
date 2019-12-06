const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const { Schema } = mongoose

const Item = new Schema({
  itemId: { type: Number, index: true },
  description: { type: Number, index: true },
  status: {
    type: String,
    enum: ['available', 'pending', 'rented'],
    default: 'available'
  }
})

Item.plugin(AutoIncrement, { inc_field: 'itemId' })

module.exports = mongoose.model('Item', Item)
