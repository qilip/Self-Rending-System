const Router = require('koa-router')

const manage = new Router

manage.get('/', (ctx) => {
  ctx.body = 'manage API root'
})

const dummy = (ctx) => {
  ctx.body = `${ctx.request.method} :: ${ctx.request.path} -- Dummy API`
}

manage.get('/auth', dummy)

manage.get('/rules', dummy)

manage.get('/rules/:id', dummy)

manage.put('/rules/:id', dummy)

manage.get('/analysis', dummy)

module.exports = manage
