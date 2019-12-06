const ItemDescription = require('../../models/itemDescription')
const Item = require ('../../models/item')

exports.list = async (ctx) => {
  let itemDescriptions

  try {
    itemDescriptions = await ItemDescription.find().exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = itemDescriptions
}

exports.create = async (ctx) => {
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

exports.read = async (ctx) => {
  const { id } = ctx.params

  let itemDescription

  try{
    itemDescription = await ItemDescription.findOne( { "id": id } ).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  if(!itemDescription) {
    ctx.status = 404
    ctx.body = { message: '존재하지 않는 물품 종류입니다' }
    return
  }

  ctx.body = itemDescription
}

exports.update = async (ctx) => {
  const { id } = ctx.params
  
  let itemDescription

  try {
    itemDescription = await ItemDescription.findOneAndUpdate({ 'id': id }, ctx.request.body, {
      new: true
    })
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = itemDescription
}

exports.delete = async (ctx) => {
  const { id } = ctx.params

  try {
    let itemDescription = await ItemDescription.findOne({ 'id': id }).exec()
    await Item.deleteMany({ 'description': itemDescription.id }).exec()
    await ItemDescription.findOneAndRemove({ 'id': id }).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = 'delete sucess'
}
