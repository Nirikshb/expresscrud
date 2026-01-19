const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { name, email } = req.body;

  db.query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, name, email });
    }
  );
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: 'ID is required' });
  db.query(
    'SELECT * FROM users WHERE id = ?',
    [id],
    (err, rows) => {
      if (err) return res.status(500).send(err);
      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(rows);
    }
  );
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  if (!id) return res.status(400).json({ message: 'ID is required' });
  if (!name || !email) return res.status(422).json({ message: 'Name and email are required' });
  db.query(
    'UPDATE users SET name = ?, email = ? WHERE id = ?',
    [name, email, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id, name, email });
    }
  );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: 'ID is required' });
  db.query(
    'DELETE FROM users WHERE id = ?',
    [id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted' });
    }
  );
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  if (!id) return res.status(400).json({ message: 'ID is required' });
  if (!name || !email) return res.status(422).json({ message: 'Name and email are required' });
  db.query(
    'UPDATE users SET name = ?, email = ? WHERE id = ?',
    [name, email, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ id, name, email });
    }
  );
});
module.exports = router;
