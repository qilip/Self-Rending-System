const Router = require('koa-router')

const customers = new Router

const dummy = (ctx) => {
  ctx.body = `${ctx.request.method} :: ${ctx.request.path} -- Dummy API`
}

customers.get('/', dummy)

customers.get('/:id', dummy)

customers.post('/:id', dummy)

customers.put('/:id', dummy)

customers.get('/:id/check', dummy)

module.exports = customers
