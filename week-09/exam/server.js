'use strict';
const mysql = require('mysql');
const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');

app.use(express.static(__dirname));
app.use(express.json());
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'attractions',
})

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'index.html'));
});
app.get('/get', (req, res) => {
  let sql = 'SELECT * FROM attractions;'
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      res.status(500).send()
      return
    }
    res.json({
      rows,
    })
  })
})
app.post('api/add', (req, res) => {

  let sql = ''
  if (req.body.id && req.body.attr_name && req.body.city && req.body.category && req.body.price && req.body.longitude && req.body.lattitude && req.body.recommended_age && req.body.duration){
    sql = `UPDATE attractions SET attr_name = "${req.body.attr_name}", city = "${req.body.city}", category= "${req.body.category}", price = "${req.body.price}", longitude= "${req.body.longitude}", lattitude = "${req.body.lattitude}", recommended_age = "${req.body.recommended_age}" , duration = = "${req.body.duration}" WHERE (id = "${req.body.id}";`
  }else{
    sql = `INSERT INTO attractions(attr_name, city, category, price, longitude, lattitude, recommended_age, duration) VALUE("${req.body.attr_name}", "${req.body.city}", "${req.body.category}", "${req.body.price}", "${req.body.longitude}", "${req.body.lattitude}", "${req.body.recommended_age}", "${req.body.duration}");`
  }
  con.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send()
      return
    }
    res.json({
      status: 'ok'

    })
  })
})
app.listen(PORT, () => {
  console.log('fuck you port 3000');
})