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
  const date = req.body.clickedDate
  console.log('req.body:', req.body);
  // const data = fs.readFileSync('./data/data.json', 'utf8')
  // console.log(data);
  // const dataObj = JSON.parse(data);

  // if(dataObj[date]){
  //   dataObj[date]++;
  // }else {
  //   dataObj[date] = 1
  // }

  // console.log(dataObj)

  // fs.writeFileSync('data/data.json', JSON.stringify(dataObj, null, 2), 'utf8')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

