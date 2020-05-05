const express = require('express')
const router = express.Router()
// var pages = require('../pages')
// var user = require('../modal/user')
// import user from '../modal/user'
router.get('/a', (req, res) => {
  // user.findOne((err, result) => {
  //   res.json(result)
  console.log('fjdfjks', 'result')
  res.send('result')
  // return res.render('/')
  // })
  // user.find({}, (err, photos) => {
  //   res.json(photos)
  // })
})
router.get('/b', (req, res) => {
  // user.findOne((err, result) => {
  //   res.json(result)
  console.log('fjdfjks', 'result')
  // res.send('result')
  // return res.render('/')
  // })
  // user.find({}, (err, photos) => {
  //   res.json(photos)
  // })
})

module.exports = router
