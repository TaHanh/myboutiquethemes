const mongoo = require('mongoose')

// mongoose.connect("mongodb://yp9tdlorbv:yp9tdlorbv@176.9.57.130:27017/yp9tdlorbv",{
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// } );

const Post = new mongoo.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
    },
    password: {
      type: String,
    },
    username: {
      type: String,
    },
  },
  {
    collection: 'posts',
  }
)

module.exports = mongoo.model('Post', Post)
