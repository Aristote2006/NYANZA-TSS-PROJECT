const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const {
  getBackups,
  createBackup,
  downloadBackup,
  deleteBackup,
  restoreBackup
} = require('../controllers/backupController');

// All routes are protected
router.use(auth);

// @route   GET /api/backups
// @desc    Get all backups
// @access  Private
router.get('/', getBackups);

// @route   POST /api/backups
// @desc    Create a new backup
// @access  Private
router.post('/', createBackup);

// @route   GET /api/backups/:filename/download
// @desc    Download a backup
// @access  Private
router.get('/:filename/download', downloadBackup);

// @route   DELETE /api/backups/:filename
// @desc    Delete a backup
// @access  Private
router.delete('/:filename', deleteBackup);

// @route   POST /api/backups/restore/:filename
// @desc    Restore from a backup
// @access  Private
router.post('/restore/:filename', restoreBackup);

module.exports = router;
