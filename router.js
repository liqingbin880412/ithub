//0 加载express

const express = require('express')
//1调用expre.router()创建一个路由实例
const router = express.Router()
//2配置路由规则
router.get('/',(req, res) => {
	res.send('index  page')
})
//3导出路由对象
module.exports = router
//4在app.js 中通过app.use(路由对象)挂载使之生效
