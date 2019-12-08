const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const { Schema } = mongoose

const Item = new Schema({
  serialNumber: { type: Number, index: true },
  itemId: { type: Number, index: true },
  status: {
    type: String,
    enum: ['available', 'pending', 'rented'],
    default: 'available'
  }
})

Item.plugin(AutoIncrement, { inc_field: 'serialNumber' })

module.exports = mongoose.model('Item', Item)
