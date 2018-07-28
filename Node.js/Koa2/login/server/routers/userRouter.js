const router = require('koa-router')()
const userController = require('../controllers/userController')

const routers = router
  .get('/login', userController.login)
  .post('/login', userController.login)
  .get('/register', userController.register)
  .post('/register', userController.register)

module.exports = routers