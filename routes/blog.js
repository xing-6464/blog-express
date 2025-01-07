const router = require('express').Router()
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.get('/list', (req, res, next) => {
  let author = req.query.author || ''
  const keyword = req.query.keyword || ''

  const result = getList(author, keyword)
  return result.then((data) => {
    res.json(new SuccessModel(data))
  })
})

module.exports = router
