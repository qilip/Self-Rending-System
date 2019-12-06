const Router = require('koa-router')

const manage = new Router
const ruleCtrl = require('./rule.controller')

manage.get('/', (ctx) => {
  ctx.body = 'manage API root'
})

const dummy = (ctx) => {
  ctx.body = `${ctx.request.method} :: ${ctx.request.path} -- Dummy API`
}

manage.get('/rules', ruleCtrl.list)

manage.get('/rules/:name', ruleCtrl.read)

manage.patch('/rules/:name', ruleCtrl.update)

manage.get('/analysis', dummy)

manage.post('/analysis', dummy)

module.exports = manage
