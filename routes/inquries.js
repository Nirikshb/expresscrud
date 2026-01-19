const express = require('express');
const router = express.Router();

let storedData = null;

router.post('/', (req, res) => {
  const { name, age } = req.body;
  storedData = { name, age };    
  res.send({ message: 'Data received successfully!', data: storedData });
});

router.get('/', (req, res) => {
  if (!storedData) {
    return res.status(404).send({ message: 'No data available. Please POST first.' });
  }
  res.send({ message: 'Here is the stored data:', data: storedData });
});

module.exports = router;
