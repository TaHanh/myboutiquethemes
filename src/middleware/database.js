import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

// const client = new MongoClient('mongodb://localhost:27017', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
let mongoClient = null
const MONGODB_URI = 'mongodb://yp9tdlorbv:yp9tdlorbv@176.9.57.130:27017/yp9tdlorbv'
const url = 'mongodb://localhost:27017'
const dbName = 'tezt'
// MongoClient.connect(url, function (err, client) {
//   console.log('Connected successfully to server')
//   mongoClient = client
//   const db = client.db(dbName)
//   client.close()
// })
// async function database(req, res, next) {
//   // if (!client.isConnected()) await client.connect()
//   // req.dbClient = client

//   // req.db = client.db('tezt')

//   req.db = mongoClient.db('tezt')
//   console.log(mongoClient)
//   return next()
// }

const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export async function setUpDb(db) {
  await db.collection('tokens').createIndex('expireAt', { expireAfterSeconds: 0 })
}

async function database(req, res, next) {
  console.log('fndjsfk', dbName)
  if (!client.isConnected()) await client.connect()
  req.dbClient = client
  req.db = client.db(dbName)
  await setUpDb(req.db)
  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware
