const express = require('express');
const router = express.Router();
const { commentOnPost } = require('../controllers/commentController');
const authenticate = require('../middleware/auth');

// Route to comment on a post
router.post('/comment', authenticate, commentOnPost);

module.exports = router;
