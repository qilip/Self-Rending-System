const mongoose = require('mongoose')
const { Schema } = mongoose

const RecordSchema = new Schema({
  Date: {
    type: Date,
    default: Date.now,
    index: true
  },
  CustomerId: String,
})

const PaymentRecordSchema = new Schema({
  Amount: Number
})

const RefundRecordSchema = new Schema({
  Amount: Number
})

const RentRecordSchema = new Schema({
  SerialNumber: Number
})

const ReturnRecordSchema = new Schema({
  SerialNumber: Number
})

const Record = mongoose.model('Record', RecordSchema)

const PaymentRecord = Record.discriminator('PaymentRecord', PaymentRecordSchema)
const RefundRecord = Record.discriminator('RefundRecord', RefundRecordSchema)
const RentRecord = Record.discriminator('RentRecord', RentRecordSchema)
const ReturnRecord = Record.discriminator('ReturnRecord', ReturnRecordSchema)

module.exports = {
  Record,

  PaymentRecord,
  RefundRecord,
  RentRecord,
  ReturnRecord
}
