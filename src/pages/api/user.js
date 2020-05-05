// export default (req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ name: 'John Doe' }))
// }
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
// const model = require('../model/user')

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  // model.findOne((err, result) => {
  //   res.json(result)
  // })
  // // console.log('fjdk', req.db)
  // let doc = await req.db.collection('user')
  // // console.log(doc)
  // res.json({ tes: 'dsdfsf' })
  // res.send('njdkshdj')
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
})

// handler.post(async (req, res) => {
//   let data = req.body
//   data = JSON.parse(data)
//   let doc = await req.db.collection('user').updateOne({ name: 'new name' }, { $set: data }, { upsert: true })
//   res.json({ message: 'ok' })
// })

export default (req, res) => handler.apply(req, res)
