const Rule = require('../../models/rule')

exports.list = async (ctx) => {
  let rules

  try {
    rules = await Rule.find().exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = rules
}

exports.read = async (ctx) => {
  const { name } = ctx.params

  let rule

  try{
    rule = await Rule.findOne( { "name":name } ).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  if(!rule) {
    ctx.status = 404
    ctx.body = { message: '존재하지 않는 룰입니다' }
    return
  }

  ctx.body = rule
}

exports.update = async (ctx) => {
  const { name } = ctx.params
  
  let rule

  try {
    rule = await Rule.findOneAndUpdate({ 'name':name }, ctx.request.body, {
      new: true
    })
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = rule
}
