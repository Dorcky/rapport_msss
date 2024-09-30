const express = require('express');
const { register, verifyEmail, login, requestPasswordReset, resetPassword } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.get('/verify/:token', verifyEmail);
router.post('/login', login);
router.post('/password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);

module.exports = router;
