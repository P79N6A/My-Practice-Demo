/**
 * 整合路由
 */

const router = require('koa-router')()

const user = require('./userRouter')

// router.post('/login', () => {console.log('register');})
router.use('', user.routes(), user.allowedMethods())

module.exports = router
