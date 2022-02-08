/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-11 22:37:23
 * @LastEditTime: 2022-02-06 23:10:49
 * @LastEditors: Lewis
 */
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const route = require("./routes");
const db = require("./config/db");

//connect to Db
db.connect();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "./public")));

//routes init
route(app);

//cookies
app.get('set-cookies',(req,res)=>{

})
app.get('set-cookies',(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
