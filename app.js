const express = require("express")
const app = express();
const cors = require("cors")
const user_route = require("./routes/user")
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const db = require('./connect.js')
db.sequelize.sync({}).then(() => {
    console.log("ok report")
  }).catch((error) => {
    console.log(error)
  })

app.use('/',user_route);
app.listen(3001);