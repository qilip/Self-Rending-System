const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  ctx.body = 'Hi! this is API response'
})

app.use(router.routes()).use(router.allowedMethods())

module.exports = {
  path: '/api',
  handler: app.callback()
}
