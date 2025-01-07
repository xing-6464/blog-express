const router = require('express').Router()

router.post('/login', (req, res, next) => {
  const { username, password } = req.body

  res.json({
    errno: 0,
    data: {
      username,
      password,
    },
  })
})

router.get('/session-test', (req, res, next) => {
  const session = req.session
  if (session.viewNum == null) {
    session.viewNum = 0
  }
  session.viewNum++
  res.json({
    errno: 0,
    viewNum: session.viewNum,
  })
})

module.exports = router
