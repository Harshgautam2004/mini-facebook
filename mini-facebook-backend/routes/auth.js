const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');
const { loginUser } = require('../controllers/authController');

// Route for user registration
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
