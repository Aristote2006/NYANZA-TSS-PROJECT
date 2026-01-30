const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { registerAdmin, loginAdmin, getAdmin } = require('../controllers/authController');

// @route   POST api/auth/register
// @desc    Register admin
// @access  Public
router.post(
  '/register',
  [
    body('username', 'Username is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  registerAdmin
);

// @route   POST api/auth/login
// @desc    Login admin
// @access  Public
router.post(
  '/login',
  [
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password is required').exists(),
  ],
  loginAdmin
);

// @route   GET api/auth/me
// @desc    Get logged in admin
// @access  Private
router.get('/me', auth, getAdmin);

module.exports = router;