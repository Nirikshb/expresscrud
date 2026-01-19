
const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.json());
const db = require('./db'); 

app.get('/db-test', (req, res) => {
  db.query('SELECT 1', (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/greet', (req, res) => {
  res.send('Greetings from your Express server!');
});

const inquriesRouter = require('./routes/inquries');
const usersRouter = require('./routes/users');
const singleRouter = require('./routes/single');
app.use('/users', usersRouter);
app.use('/single', singleRouter);

app.use('/inquries', inquriesRouter);
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});

