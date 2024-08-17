const express = require('express');
const router = express.Router();
const { addFriend } = require('../controllers/friendController');
const authenticate = require('../middleware/auth');

// Route to add a friend
router.post('/add', authenticate, addFriend);

module.exports = router;
