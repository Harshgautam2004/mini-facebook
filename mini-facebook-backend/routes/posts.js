const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/postController');
const authenticate = require('../middleware/auth');

// Route to create a post
router.post('/create', authenticate, createPost);

module.exports = router;
