const mongoose  = require("mongoose");
const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(console.log("connect to mongodb successfully"))
    .catch(error => console.log(error));
}
module.exports = connectToMongo;