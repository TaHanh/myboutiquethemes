const express = require('express')
const router = express.Router()
const request = require('request')
const userAPI = require('../api/user')
const User = require('../modal/user')
router.get('/user', userAPI.getUser)

router.route('/create').post(function (req, res) {
  const user = new User(req.body)
  user
    .save()
    .then((user) => {
      res.json('User added successfully')
    })
    .catch((err) => {
      res.status(400).send('unable to save to database')
    })
})

router.route('/create').get(function (req, res) {
  User.find({}, (err, photos) => {
    res.json(photos)
  })
})

router.get('/search', (req, res) => {
  console.log('/search')
  request('https://api.tvmaze.com/search/shows?q=batman', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.json(body)
    }
  })
})
router.post('/search', (req, res) => {
  // console.log('/post', req)
  console.log('/post', req.body.name)
  console.log('/post', req.params['name'])
})

module.exports = router
