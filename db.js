const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Niriksh098&',
  database: 'express_database'
});

db.connect(err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('MySQL connected');
});

module.exports = db;
