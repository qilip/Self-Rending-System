const Router = require('koa-router')

const items = new Router
const itemDiscCtrl = require('./itemDisc.controller')
const itemCtrl = require('./items.controller')

items.get('/', (ctx) => {
  ctx.body = 'items API root'
})

const dummy = (ctx) => {
  ctx.body = `${ctx.request.method} :: ${ctx.request.path} -- Dummy API`
}

items.get('/descriptions', itemDiscCtrl.list)

items.post('/descriptions/new', itemDiscCtrl.create)

items.get('/descriptions/:id', itemDiscCtrl.read)

items.put('/descriptions/:id', dummy)

items.delete('/descriptions/:id', dummy)

items.get('/:id', itemCtrl.read)

items.post('/new', itemCtrl.create)

items.put('/:id', dummy)

items.delete('/:id', dummy)

module.exports = items
