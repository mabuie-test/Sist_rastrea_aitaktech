const express = require('express');
const { register, login } = require('../controllers/authController');
const { authMiddleware, roleMiddleware } = require('../middleware');

const router = express.Router();
router.post('/login', login);
router.post('/register', authMiddleware, roleMiddleware('super-admin'), register);
module.exports = router;
