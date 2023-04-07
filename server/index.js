const express = require('express')
const app = express()
const port = 3500
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello, Calendar")
})

app.post("/", (req,res) => {
  
  let dataObj = {}
  const date = req.body.post

  fs.readFile('data/data.json', 'utf8', (err, data) => {
    // console.log('datasdfsd', JSON.parse(data)[date]);
    //update dataobj
    console.log('1. readfile data', data);
    dataObj = {...{data}}
    console.log('dataObj in readfile', dataObj);
  })

  if(dataObj[date]){
    dataObj[date]++;
  }else {
    dataObj[date] = 1
  }

  console.log(dataObj)

  fs.writeFile('data/data.json', JSON.stringify(dataObj), (err) => {
    if(err) {
      throw err;
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//readFile 