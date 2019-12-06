const mongoose = require('mongoose')
const { Schema } = mongoose

const Rule = new Schema({
  name: String,
  num: Number
})

module.exports = mongoose.model('Rule', Rule)
