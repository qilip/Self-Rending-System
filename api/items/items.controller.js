const Item = require('../../models/item')
const ItemDescription = require('../../models/itemDescription')

exports.list = async (ctx) => {
  let items

  try {
    items = await Item.find().exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = items
}

exports.read = async (ctx) => {
  const { id } = ctx.params

  let item

  try{
    item = await Item.findOne( { "itemId":id } ).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  if(!item) {
    ctx.status = 404
    ctx.body = { message: '존재하지 않는 물품 번호입니다' }
    return
  }

  ctx.body = item
}

exports.create = async (ctx) => {
  const { description } = ctx.request.body

  const item = new Item({ description })

  try {
    await item.save()
    let itemDescription = await ItemDescription.findOne( { 'id': description } ).exec()
    await itemDescription.addItem(item.itemId)
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = item
}

exports.update = async (ctx) => {
  const { id } = ctx.params
  
  let item

  try {
    item = await Item.findOneAndUpdate({ 'itemId': id }, ctx.request.body, {
      new: true
    })
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = item
}

exports.delete = async (ctx) => {
  const { id } = ctx.params

  try {
    await Item.findOneAndRemove({ 'itemId': id }).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = 'delete sucess'
}
