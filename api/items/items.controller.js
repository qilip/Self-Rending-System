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
  const { serialNumber } = ctx.params

  let item

  try{
    item = await Item.findOne( { "serialNumber": serialNumber } ).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  if(!item) {
    ctx.status = 404
    ctx.body = { message: '존재하지 않는 시리얼 번호입니다' }
    return
  }

  ctx.body = item
}

exports.create = async (ctx) => {
  const { itemId } = ctx.request.body

  const item = new Item({
    itemId
  })

  try {
    await item.save()
    let itemDescription = await ItemDescription.findOne( { 'id': itemId } ).exec()
    await itemDescription.addItem(item.serialNumber)
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = item
}

exports.update = async (ctx) => {
  const { id } = ctx.params
  
  let item

  try {
    item = await Item.findOneAndUpdate({ 'serialNumber': id }, ctx.request.body, {
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
    await Item.findOneAndRemove({ 'serialNumber': id }).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = 'delete success'
}
