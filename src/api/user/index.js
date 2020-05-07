const express = require('express')
const router = express.Router()
const request = require('request')
const controller = require('./controller')

router.get('/', controller.getUser)

router.post('/', controller.postUser)

module.exports = router
