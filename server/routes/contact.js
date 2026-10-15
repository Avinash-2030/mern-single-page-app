const express = require('express');
const Message = require('../models/Message');

const router = express.Router();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact  -> saves a contact form message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !name.trim()) return res.status(400).json({ error: 'Enter your name.' });
    if (!email || !EMAIL_RE.test(email.trim())) return res.status(400).json({ error: 'Enter a valid email address.' });
    if (!message || message.trim().length < 10) return res.status(400).json({ error: 'Write a message of at least 10 characters.' });

    await Message.create({ name, email, message });
    res.status(201).json({ message: 'Thanks! Your message has been sent.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong. Try again in a moment.' });
  }
});

module.exports = router;
