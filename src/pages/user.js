// export default (req, res) => {
//    res.statusCode = 200
//    res.setHeader('Content-Type', 'application/json')
//    res.end(JSON.stringify({ name: 'John Doe' }))
//  }
import nextConnect from 'next-connect'
import middleware from '../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  let doc = await req.db.collection('user').findOne()
  console.log(doc)
  res.json(doc)
})

export default handler
