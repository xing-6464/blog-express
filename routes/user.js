const router = require('express').Router()
const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/login', (req, res, next) => {
  const { username, password } = req.body
  const result = login(username, password)

  return result.then((data) => {
    if (data.username) {
      req.session.username = data.username
      req.session.realname = data.realname

      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('登录失败'))
  })
})

router.get('/login-test', (req, res, next) => {
  if (req.session.username) {
    res.json({
      errno: 0,
      msg: '已登录',
    })
    return
  }
  res.json({
    errno: -1,
    msg: '未登录',
  })
})

module.exports = router
