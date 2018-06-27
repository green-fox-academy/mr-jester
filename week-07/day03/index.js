'use strict';
const express = require('express');
const mysql = require('mysql')
const app = express();
const PORT = 3000;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });
require('dotenv').config();
const conn = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
})
app.get('/test', (req, res) => {
  let sql = 'SELECT * from author';
  let queryInputs = [];

  if (req.query.country) {
    sql = 'SELECT * from author WHERE country = ?;';
    queryInputs = [req.query.country];
  }

  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    res.json({
      authors: rows,
    });
  });
});
app.get('/test/book_mast', (req, res) => {
  let sql = 'SELECT book_name from book_mast';
  let queryInputs = [];
  if (req.query.pub_lang) {
    sql = 'SELECT book_name from book_mast WHERE pub_lang = ? ;';
    queryInputs = [req.query.pub_lang]
  }
  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      authors: rows,
    });
  });
})
app.get('/test/category', (req, res) => {
  let sql = 'SELECT cate_descrip FROM category';
  let queryInputs = [req.query.cate_descrip]
  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      authors: rows,
    });
  });
})
app.get('/test/publisher', (req, res) => {
  let sql = 'SELECT pub_name FROM publisher';
  let queryInputs = [];
  if (req.query.no_of_branch) {
    sql = 'SELECT pub_name WHERE no_of_branch = ?;';
    queryInputs = [req.query.no_of_branch];
  }
  conn.query(sql, queryInputs, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      authors: rows,
    });
  });
})

app.listen(PORT, () => {
  console.log(`listening to port ${PORT} bitches`);
});