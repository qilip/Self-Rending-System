const Item = require('../../models/item')
const ItemDescription = require('../../models/itemDescription')

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
    ctx.body = { message: '존재하지 않는 물품 종류입니다' }
    return
  }

  ctx.body = item
}

exports.create = async (ctx) => {
  const {
    description
  } = ctx.request.body

  const item = new Item({
    description
  })

  let itemDescription

  try {
    await item.save()
    itemDescription = await ItemDescription.findOne( { 'id': description } ).exec()
    await itemDescription.addItem(item.itemId)
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = item
}
