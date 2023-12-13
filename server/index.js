const express = require('express');
const app = express();
const cars = require('cors');
const mysql = require('mysql');

app.use(cors());

const db  = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : '1q2w3e4R%',
  database : 'my_db'
});

app.get('/', (req, res) => {
    db.query("INESRT INTO users (username, password) VALUES ('Testing', '123')", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
})

app.listen(8000, () => {
    console.log('server listening on port 8080');
})