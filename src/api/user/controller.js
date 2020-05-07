const User = require('./model')
function getUser(req, res) {
  User.find({}, (err, photos) => {
    res.json(photos)
  })
}
function postUser(req, res) {
  console.log('req.body', req.body)
  const user = new User(req.body)
  user
    .save()
    .then((user) => {
      res.json('User added successfully')
    })
    .catch((err) => {
      res.status(400).send('unable to save to database')
    })
}

module.exports = {
  postUser: postUser,
  getUser: getUser,
}
