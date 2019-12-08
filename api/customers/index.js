const Router = require('koa-router')

const customers = new Router
const customersCtrl = require('./customers.controller')

const dummy = (ctx) => {
  ctx.body = `${ctx.request.method} :: ${ctx.request.path} -- Dummy API`
}

customers.get('/', customersCtrl.list)

customers.get('/:id', customersCtrl.read)

customers.post('/new', customersCtrl.create)

customers.delete('/:id', customersCtrl.delete)

customers.patch('/:id', customersCtrl.update)

customers.get('/:id/check', dummy)

module.exports = customers
