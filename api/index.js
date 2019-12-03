require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URI, {
  //dbName: 'srs',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  (response) => {
    console.log('MongoDB Connect Success')
  }
).catch((e) => {
  console.error(e)
})

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ItemDescription = mongoose.model('itemDescription', new Schema({
  name: String,
  price: Number
}))

router.get('/', (ctx) => {
  ctx.body = 'Hi! this is TEST API response'
})

router.get('/desc', async (ctx, next) => {
  await new Promise((resolve, reject) => {
    var docs = ItemDescription.find({}, (err, docs) => {
      if (!err) {
        // console.log(docs)
        resolve(docs)
      } else {
        reject(err)
      }
    })
  }).then(docs => {
    ctx.body = docs
  }).catch(err => {
    console.log(err)
    ctx.body = []
  })
})

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = {
  path: '/api',
  handler: app.callback()
}
