import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const client = new MongoClient(
  'mongodb://localhost:27017/?3t.uriVersion=2&3t.connectionMode=direct&readPreference=primary&3t.connection.name=tezt',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
// const client = new MongoClient('mongodb://localhost:27017/tezt', function (err, db) {
//   if (err) {
//     console.log('Unable to connect to the mongoDB server. Error:', err)
//     // rejects(err)
//   } else {
//     console.log('Connection established to')

//     //Close connection
//     //db.close();
//     // resolve(db)
//   }
// })

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect()
  req.dbClient = client
  req.db = client.db('db-name')
  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware
