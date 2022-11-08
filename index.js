const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
require('dotenv').config();
//middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('genius car server is running')
})

//Y1MW8tkXkQdRAL7Y
/* console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD); */

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.w75vwv7.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
app.listen(port,()=>{
    console.log(`Genius car listening on port ${port}`);
})
