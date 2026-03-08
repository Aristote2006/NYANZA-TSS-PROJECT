const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Backup storage directory
const BACKUP_DIR = path.join(__dirname, '../../backups');

// Ensure backup directory exists
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// @desc    Get all backups
// @route   GET /api/backups
// @access  Private
const getBackups = async (req, res) => {
  try {
    // List all backup files
    const files = fs.readdirSync(BACKUP_DIR);
    
    const backups = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const filePath = path.join(BACKUP_DIR, file);
        const stats = fs.statSync(filePath);
        return {
          id: file,
          filename: file,
          date: stats.mtime.toLocaleString(),
          size: (stats.size / 1024 / 1024).toFixed(2) + ' MB',
          type: file.includes('full') ? 'Full Backup' : 'Partial Backup',
          createdAt: stats.mtime
        };
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json(backups);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Create a new backup
// @route   POST /api/backups
// @access  Private
const createBackup = async (req, res) => {
  try {
    const { type = 'full' } = req.body;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `backup-${type}-${timestamp}.json`;
    const filePath = path.join(BACKUP_DIR, filename);

    // Collect data from all collections
    const backupData = {
      timestamp: new Date(),
      type: type,
      collections: {}
    };

    // Get all models
    const models = mongoose.connection.models;
    
    // Export data from each model
    for (const modelName in models) {
      try {
        const model = models[modelName];
        const documents = await model.find({}).lean();
        backupData.collections[modelName] = documents;
      } catch (err) {
        console.error(`Error exporting ${modelName}:`, err.message);
        backupData.collections[modelName] = [];
      }
    }

    // Write backup to file
    fs.writeFileSync(filePath, JSON.stringify(backupData, null, 2));

    res.json({
      msg: 'Backup created successfully',
      filename: filename,
      path: filePath,
      size: (fs.statSync(filePath).size / 1024 / 1024).toFixed(2) + ' MB'
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Download a backup
// @route   GET /api/backups/:filename/download
// @access  Private
const downloadBackup = async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(BACKUP_DIR, filename);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ msg: 'Backup not found' });
    }

    res.download(filePath, filename);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete a backup
// @route   DELETE /api/backups/:filename
// @access  Private
const deleteBackup = async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(BACKUP_DIR, filename);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ msg: 'Backup not found' });
    }

    fs.unlinkSync(filePath);
    res.json({ msg: 'Backup deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Restore from a backup
// @route   POST /api/backups/restore/:filename
// @access  Private
const restoreBackup = async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(BACKUP_DIR, filename);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ msg: 'Backup not found' });
    }

    // Read backup file
    const backupData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Clear existing data and restore
    const models = mongoose.connection.models;
    const results = {};

    for (const modelName in backupData.collections) {
      try {
        const model = models[modelName];
        if (model) {
          // Clear collection
          await model.deleteMany({});
          
          // Restore documents
          const documents = backupData.collections[modelName];
          if (documents.length > 0) {
            await model.insertMany(documents);
          }
          
          results[modelName] = `Restored ${documents.length} documents`;
        }
      } catch (err) {
        console.error(`Error restoring ${modelName}:`, err.message);
        results[modelName] = `Error: ${err.message}`;
      }
    }

    res.json({
      msg: 'Restore completed',
      results
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  getBackups,
  createBackup,
  downloadBackup,
  deleteBackup,
  restoreBackup
};
