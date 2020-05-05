var mongose = require("mongoose");
​
// mongose.connect("mongodb://yp9tdlorbv:yp9tdlorbv@176.9.57.130:27017/yp9tdlorbv",{
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// } );
const userSchema = mongose.Schema({
    "name":String,
    "age": Number,
})


const user = mongose.model("user", userSchema);

module.exports = user;