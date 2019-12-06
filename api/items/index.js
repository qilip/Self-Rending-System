const Router = require('koa-router')

const items = new Router
const itemDiscCtrl = require('./itemDisc.controller')
const itemCtrl = require('./items.controller')

items.get('/descriptions', itemDiscCtrl.list)

items.post('/descriptions/new', itemDiscCtrl.create)

items.get('/descriptions/:id', itemDiscCtrl.read)

items.patch('/descriptions/:id', itemDiscCtrl.update)

items.delete('/descriptions/:id', itemDiscCtrl.delete)

items.get('/', itemCtrl.list)

items.get('/:id', itemCtrl.read)

items.post('/new', itemCtrl.create)

items.patch('/:id', itemCtrl.update)

items.delete('/:id', itemCtrl.delete)

module.exports = items
