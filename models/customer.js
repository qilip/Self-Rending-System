const mongoose = require('mongoose')
const { Schema } = mongoose

const Customer = new Schema({
  studentId: { type: String, index: true },
  credit: Number,
  penalty: String
})

module.exports = mongoose.model('Customer', Customer)
