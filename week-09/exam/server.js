'use strict';
const mysql = require('mysql');
const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');

app.use(express.static(__dirname));
app.use(express.json());
const conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'attractions',
})

app.get ('/' ,(req,res)=>{
  res.sendfile(path.join(__dirname,'index.html'));
});
app.get ('/get', (req,res)=>{
  let sql = 'SELECT * FROM attractions;'
  conn.query(sql,(err,rows) =>{
    if (err){
      console.log(err)
      res.status(500).send()
      return
    }
    res.json({
      rows,
    })
  })
})
app.listen(PORT,()=>{
  console.log ('fuck you port 3000');
})