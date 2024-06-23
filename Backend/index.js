const connectToMongo = require("./db");
const dotenv = require('dotenv');
dotenv.config();
connectToMongo();
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors());
const port = 5000;
app.use(express.json());
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Notebook app listening on port ${port}`)
})