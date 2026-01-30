const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { 
  getAllLeaders, 
  getActiveLeaders, 
  getLeaderById, 
  createLeader, 
  updateLeader, 
  deleteLeader 
} = require('../controllers/leadersController');

// @route   GET api/leaders
// @desc    Get all leaders
// @access  Public
router.get('/', getAllLeaders);

// @route   GET api/leaders/active
// @desc    Get active leaders
// @access  Public
router.get('/active', getActiveLeaders);

// @route   GET api/leaders/:id
// @desc    Get leader by ID
// @access  Public
router.get('/:id', getLeaderById);

// @route   POST api/leaders
// @desc    Create leader
// @access  Private
router.post(
  '/',
  auth,
  [
    body('name', 'Name is required').not().isEmpty(),
    body('position', 'Position is required').not().isEmpty(),
    body('department', 'Department is required').not().isEmpty(),
    body('bio', 'Bio is required').not().isEmpty(),
    body('imageUrl', 'Image URL is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
  ],
  createLeader
);

// @route   PUT api/leaders/:id
// @desc    Update leader
// @access  Private
router.put(
  '/:id',
  auth,
  [
    body('name', 'Name is required').not().isEmpty(),
    body('position', 'Position is required').not().isEmpty(),
    body('department', 'Department is required').not().isEmpty(),
    body('bio', 'Bio is required').not().isEmpty(),
  ],
  updateLeader
);

// @route   DELETE api/leaders/:id
// @desc    Delete leader
// @access  Private
router.delete('/:id', auth, deleteLeader);

module.exports = router;