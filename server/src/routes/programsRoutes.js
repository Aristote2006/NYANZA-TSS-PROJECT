const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { 
  getAllPrograms, 
  getActivePrograms, 
  getProgramById, 
  createProgram, 
  updateProgram, 
  deleteProgram 
} = require('../controllers/programsController');

// @route   GET api/programs
// @desc    Get all programs
// @access  Public
router.get('/', getAllPrograms);

// @route   GET api/programs/active
// @desc    Get active programs
// @access  Public
router.get('/active', getActivePrograms);

// @route   GET api/programs/:id
// @desc    Get program by ID
// @access  Public
router.get('/:id', getProgramById);

// @route   POST api/programs
// @desc    Create program
// @access  Private
router.post(
  '/',
  auth,
  [
    body('title', 'Title is required').not().isEmpty(),
    body('description', 'Description is required').not().isEmpty(),
    body('duration', 'Duration is required').not().isEmpty(),
    body('curriculum', 'Curriculum is required').not().isEmpty(),
    body('imageUrl', 'Image URL is required').not().isEmpty(),
    body('category', 'Category is required').not().isEmpty(),
  ],
  createProgram
);

// @route   PUT api/programs/:id
// @desc    Update program
// @access  Private
router.put(
  '/:id',
  auth,
  [
    body('title', 'Title is required').not().isEmpty(),
    body('description', 'Description is required').not().isEmpty(),
    body('duration', 'Duration is required').not().isEmpty(),
    body('curriculum', 'Curriculum is required').not().isEmpty(),
  ],
  updateProgram
);

// @route   DELETE api/programs/:id
// @desc    Delete program
// @access  Private
router.delete('/:id', auth, deleteProgram);

module.exports = router;