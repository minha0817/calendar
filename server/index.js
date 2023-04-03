const express = require('express')
const app = express()
const port = 3500
const cors = require("cors");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send("Hello, Calendar")
})

app.post("/", (req,res) => {
  res.json({"habitList" : req.body})
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})