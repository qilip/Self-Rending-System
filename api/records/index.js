const Router = require('koa-router')

const record = new Router()

const {
  Record,

  PaymentRecord,
  RefundRecord,
  RentRecord,
  ReturnRecord
} = require('../../models/record')

record.get('/', async (ctx) => {
  let records

  try {
    records = await Record.find({}).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = records
})

module.exports = record
