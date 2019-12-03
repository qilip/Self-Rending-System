require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'srs',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  (response) => {
    console.log('MongoDB Connect Sucess')
  }
).catch((e) => {
  console.error(e)
})

router.get('/', (ctx) => {
  ctx.body = 'Hi! this is TEST API response'
})

app.use(router.routes()).use(router.allowedMethods())

module.exports = {
  path: '/api',
  handler: app.callback()
}
