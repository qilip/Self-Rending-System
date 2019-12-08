const mongoose = require('mongoose')
const { Schema } = mongoose

const Customer = new Schema({
  studentId: { type: String, index: true },
  credit: Number,
  penalty: String
})

Customer.methods.increase = function (amount) {
  this.credit += amount
  return this.save()
}

Customer.methods.decrease = function (amount) {
  this.credit -= amount
  return this.save()
}

module.exports = mongoose.model('Customer', Customer)
