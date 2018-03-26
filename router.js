//0 加载express

const express = require('express')

const index = require('./controllers/index')
const topic = require('./controllers/topic')
const user = require('./controllers/user')











//1调用expre.router()创建一个路由实例
const router = express.Router()
//2配置路由规则

//首页路由
router
.get('/',index.showIndex)

//用户路由
router
  .get('/signin',user.showSignin)
  .post('/signin', user.signin)
  .get('/signup', user.showSignup)
  .post('/signup', user.signup)
  .post('/signout', user.signout)

//话题相关
router
  .get('/topic/create',topic.showCreate)
  .post('/topic/create', topic.create)
  .get('/topic/:topicID', topic.show)
  .get('/topic/:topicID/edit', topic.showEdit)
  .post('/topic/:topicID/edit', topic.edit)
  .post('/topic/:topicID/delete', topic.delete)









//3导出路由对象
module.exports = router
//4在app.js 中通过app.use(路由对象)挂载使之生效
