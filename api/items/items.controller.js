const ItemDescription = require('../../models/itemDescription')

exports.discList = async (ctx) => {
  let itemDescriptions

  try {
    itemDescriptions = await ItemDescription.find().exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = itemDescriptions
}

exports.discRead = (ctx) => {
  ctx.body = 'description Read'
}

exports.discCreate = async (ctx) => {
  const {
    name,
    price
  } = ctx.request.body

  const itemDescription = new ItemDescription({
    name,
    price
  })

  try {
    await itemDescription.save()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = itemDescription
}
