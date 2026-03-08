const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const {
  getAnalyticsStats,
  getTrafficSources,
  getTopPages
} = require('../controllers/analyticsController');

// All routes are protected
router.use(auth);

// @route   GET /api/analytics/stats
// @desc    Get analytics statistics
// @access  Private
router.get('/stats', getAnalyticsStats);

// @route   GET /api/analytics/traffic
// @desc    Get traffic sources
// @access  Private
router.get('/traffic', getTrafficSources);

// @route   GET /api/analytics/top-pages
// @desc    Get top pages
// @access  Private
router.get('/top-pages', getTopPages);

module.exports = router;
