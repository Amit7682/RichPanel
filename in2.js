const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Register a new user
router.post('/register', authController.register);

// User login
router.post('/login', authController.login);

module.exports = router;
