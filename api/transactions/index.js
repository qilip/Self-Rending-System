const Router = require('koa-router')

const transaction = new Router()

const {
  Record,

  PaymentRecord,
  RefundRecord,
  RentRecord,
  ReturnRecord
} = require('../../models/record')

const Customer = require('../../models/customer')
const Item = require('../../models/item')
const ItemDescription = require('../../models/itemDescription')

transaction.post('/payment', (ctx) => {
  const { customerID, amount } = ctx.request.body

  // TODO do something

  ctx.body = {
    message: 'success'
  }
})

transaction.post('/refund', (ctx) => {
  const { customerID, amount } = ctx.request.body

  // TODO do something

  ctx.body = {
    message: 'success'
  }
})

transaction.post('/rent', async (ctx) => {
  const { customerID, serialNumbers } = ctx.request.body

  // TODO check rules
  
  // TODO check penalties

  // TODO check validness

  // update item status and create records
  var priceSum = 0
  for (const serialNumber of serialNumbers) {
    const item = await Item.findOne({ 'serialNumber': serialNumber })
    item.status = 'rented'
    item.customerId = customerID
    await item.save()

    const description = await ItemDescription.findOne({ 'id': item.itemId })
    priceSum += description.price

    // create record
    const record = new RentRecord({
      SerialNumber: serialNumber,
      CustomerId: customerID
    })

    try {
      await record.save()
    } catch (e) {
      return ctx.throw(500, e)
    }
  }

  // update securiy deposit
  const customer = await Customer.findOne({ 'studentId': customerID })
  await customer.decrease(priceSum)
  
  ctx.body = {
    message: 'success'
  }
})

transaction.post('/return', async (ctx) => {
  const { serialNumbers } = ctx.request.body

  // TODO check customer rules

  for (const serialNumber of serialNumbers) {
    const item = await Item.findOne({ 'serialNumber': serialNumber })
    item.status = 'pending'
    await item.save()

    // const description = await ItemDescription.findOne({ 'id': item.itemId })
    // const customer = await Customer.findOne({ 'studentId': item.customerId })
    // await customer.increase(description.price)
    
    // create record
    const record = new ReturnRecord({
      SerialNumber: serialNumber,
      CustomerId: item.customerId
    })

    try {
      await record.save()
    } catch (e) {
      return ctx.throw(500, e)
    }
  }

  ctx.body = {
    message: 'success'
  }
})

module.exports = transaction
