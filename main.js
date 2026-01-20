const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/greet', (req, res) => {
  res.send('Greetings from your Express server!');
});

const usersRouter = require('./routes/users');

const inquriesRouter = require('./routes/inquries');

app.use('/users', usersRouter);
app.use('/inquries', inquriesRouter);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
