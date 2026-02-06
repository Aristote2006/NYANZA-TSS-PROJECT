const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { 
  getAllNews, 
  getFeaturedNews, 
  getNewsById, 
  createNews, 
  updateNews, 
  deleteNews 
} = require('../controllers/newsController');

// @route   GET api/news
// @desc    Get all news
// @access  Public
router.get('/', getAllNews);

// @route   GET api/news/featured
// @desc    Get featured news
// @access  Public
router.get('/featured', getFeaturedNews);

// @route   GET api/news/:id
// @desc    Get news by ID
// @access  Public
router.get('/:id', getNewsById);

// @route   POST api/news
// @desc    Create news
// @access  Private
router.post(
  '/',
  auth,
  [
    body('title', 'Title is required').not().isEmpty(),
    body('content', 'Content is required').not().isEmpty(),
  ],
  createNews
);

// @route   PUT api/news/:id
// @desc    Update news
// @access  Private
router.put(
  '/:id',
  auth,
  [
    body('title', 'Title is required').not().isEmpty(),
    body('content', 'Content is required').not().isEmpty(),
  ],
  updateNews
);

// @route   DELETE api/news/:id
// @desc    Delete news
// @access  Private
router.delete('/:id', auth, deleteNews);

module.exports = router;