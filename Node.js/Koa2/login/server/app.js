const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const convert = require('koa-convert')
const cors = require('koa-cors')
const koaBody = require('koa-body')

const config = require('../config.js')
const routers = require('./routers/index')

const app = new Koa()

// session 存储配置
const sessionStore = new MysqlStore({
  user: config.database.USER,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
})

// cookie 配置
const cookie = {

}

app.use(session({
  key: 'USER_SID',
  store: sessionStore,
  cookie
}))

app.use(convert(cors({
  origin: 'http://localhost:3000',
  credentials: true
})))
// app.use(bodyParser())
app.use(koaBody({
  multipart: false
}))
app.use(convert(koaLogger()))
app.use(routers.routes(), routers.allowedMethods())


app.listen(1314, () => {console.log('port 1314 is listening');})