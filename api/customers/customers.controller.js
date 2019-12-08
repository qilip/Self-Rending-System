const Customer = require('../../models/customer')

exports.list = async (ctx) => {
  let customers

  try {
    customers = await Customer.find().exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = customers
}

exports.read = async (ctx) => {
  const { id } = ctx.params

  let customer

  try{
    customer = await Customer.findOne( { "studentId": id } ).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  if(!customer) {
    ctx.status = 404
    ctx.body = { message: '등록되지 않은 학생입니다. 보증금을 먼저 충전해주세요' }
    return
  }

  ctx.body = customer
}

exports.create = async (ctx) => {
  const { studentId, credit } = ctx.request.body

  const customer = new Customer({ studentId, credit })

  try {
    await customer.save()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = customer
}

exports.update = async (ctx) => {
  const { id } = ctx.params
  
  let customer

  try {
    customer = await Customer.findOneAndUpdate({ 'studentId': id }, ctx.request.body, {
      new: true
    })
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = customer
}

exports.delete = async (ctx) => {
  const { id } = ctx.params

  try {
    await Customer.findOneAndRemove({ 'studentId': id }).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = 'delete success'
}
