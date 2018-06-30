const express = require("express");
const app = express();
const parser = require("body-parser");
const port = 3001;

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017", (err, client)=>{if (err) next(err);
const db = client.db("elementsdb");
console.log("Connected to DB");

app.get("/api/elements", (req, res, next) => {
  const elementsCollection = db.collection("elements");
  elementsCollection.find().toArray((err, elements) => {
    if(err) next(err);
    res.json(elements);
  });

});



app.listen(port, ()=>{
  console.log("app listening on port", port);
})

})
