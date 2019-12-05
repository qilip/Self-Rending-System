const Router = require('koa-router')

const items = new Router

items.get('/', (ctx) => {
  ctx.body = 'items API root'
})

const dummy = (ctx) => {
  ctx.body = `${ctx.request.method} :: ${ctx.request.path} -- Dummy API`
}

items.get('/descriptions', dummy)

items.get('/descriptions/:id', dummy)

items.post('/descriptions/:id', dummy)

items.put('/descriptions/:id', dummy)

items.delete('/descriptions/:id', dummy)

items.get('/:id', dummy)

items.post('/:id', dummy)

items.put('/:id', dummy)

items.delete('/:id', dummy)

module.exports = items
