const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { 
  sendContactMessage, 
  getAllContactMessages, 
  getContactMessageById, 
  updateContactMessage, 
  deleteContactMessage 
} = require('../controllers/contactController');

// @route   POST api/contact
// @desc    Send contact message
// @access  Public
router.post(
  '/',
  [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('subject', 'Subject is required').not().isEmpty(),
    body('message', 'Message is required').not().isEmpty(),
  ],
  sendContactMessage
);

// @route   GET api/contact
// @desc    Get all contact messages
// @access  Private
router.get('/', auth, getAllContactMessages);

// @route   GET api/contact/:id
// @desc    Get contact message by ID
// @access  Private
router.get('/:id', auth, getContactMessageById);

// @route   PUT api/contact/:id
// @desc    Update contact message
// @access  Private
router.put(
  '/:id',
  auth,
  [
    body('status', 'Status is required').not().isEmpty(),
  ],
  updateContactMessage
);

// @route   DELETE api/contact/:id
// @desc    Delete contact message
// @access  Private
router.delete('/:id', auth, deleteContactMessage);

module.exports = router;