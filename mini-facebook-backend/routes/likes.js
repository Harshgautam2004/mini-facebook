const express = require('express');
const router = express.Router();
const { likePost } = require('../controllers/likeController');
const authenticate = require('../middleware/auth');

// Route to like a post
router.post('/like',authenticate ,likePost);

module.exports = router;
