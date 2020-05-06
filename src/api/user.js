// const User = require('../modal/user')
function getUser(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
  // User.findOne((err, result) => {
  //   res.json(result)
  // })
}
function postUser(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
}

module.exports = {
  postUser: postUser,
  getUser: getUser,
}
