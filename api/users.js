const express = require('express');
const router = express.Router();

// Temporary in-memory users array (database ke liye placeholder)
let users = [];

// GET all users
router.get('/users', (req, res) => {
    res.json({ users });
});

// POST new user
router.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);

    res.status(201).json({ message: 'User added successfully', user: newUser });
});

module.exports = router;
