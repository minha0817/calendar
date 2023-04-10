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
  res.send("json 파일을 제대로 보내라!!!!!")
})

app.post("/", (req,res) => {
  const date = req.body.clickedDate
  const habit = req.body.input 

  const data = fs.readFileSync('./public/db/data.json', 'utf8')
  const dataObj = JSON.parse(data);

  if(dataObj[date]){
    dataObj[date].push(habit)
  }else {
    dataObj[date] = [habit]
  }

  console.log("dataObj:", dataObj)

  fs.writeFileSync('./public/db/data.json', JSON.stringify(dataObj, null, 2), 'utf8')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

