const mongoose  = require("mongoose");
const uri ="mongodb://127.0.0.1:27017/inotebook";
const connectToMongo = ()=>{
    mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(console.log("connect to mongodb successfully"))
    .catch(error => console.log(error));
}
module.exports = connectToMongo;