const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const { Schema } = mongoose

const ItemDescription = new Schema({
  id: { type: Number, index: true },
  name: String,
  price: Number,
  items: [String]
})

ItemDescription.plugin(AutoIncrement, { inc_field: 'id' })

ItemDescription.methods.addItem = function (serialNumber) {
  this.items.push(serialNumber)
  return this.save()
}

module.exports = mongoose.model('ItemDescription', ItemDescription)
