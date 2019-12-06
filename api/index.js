require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'srsdb',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
  (response) => {
    console.log('MongoDB Connect Sucess')
  }
).catch((e) => {
  console.error(e)
})

const api = new Router()
const items = require('./items')
const customers = require('./customers')
const manage = require('./manage')

api.use(bodyParser())

api.get('/', (ctx) => {
  ctx.body = 'Hi! this is TEST API response'
})

api.use('/items', items.routes())
api.use('/customers', customers.routes())
api.use('/manage', manage.routes())

app.use(api.routes()).use(api.allowedMethods())

module.exports = {
  path: '/api',
  handler: app.callback()
}
