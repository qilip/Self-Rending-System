const Router = require('koa-router')

const items = new Router
const itemsCtrl = require('./items.controller')

items.get('/', (ctx) => {
  ctx.body = 'items API root'
})

const dummy = (ctx) => {
  ctx.body = `${ctx.request.method} :: ${ctx.request.path} -- Dummy API`
}

items.get('/descriptions', itemsCtrl.discList)

items.post('/descriptions', itemsCtrl.discCreate)

items.get('/descriptions/:id', itemsCtrl.discRead)

items.put('/descriptions/:id', dummy)

items.delete('/descriptions/:id', dummy)

items.get('/:id', dummy)

items.post('/:id', dummy)

items.put('/:id', dummy)

items.delete('/:id', dummy)

module.exports = items
