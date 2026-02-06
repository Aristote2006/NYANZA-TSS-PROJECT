const Leader = require('../models/Leaders');
const { body, validationResult } = require('express-validator');
const upload = require('../middlewares/uploadMiddleware');

// @desc    Get all leaders
// @route   GET /api/leaders
// @access  Public
const getAllLeaders = async (req, res) => {
  try {
    const leaders = await Leader.find()
      .sort({ order: 1, createdAt: -1 });
    res.json(leaders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get active leaders only
// @route   GET /api/leaders/active
// @access  Public
const getActiveLeaders = async (req, res) => {
  try {
    const leaders = await Leader.find({ isActive: true })
      .sort({ order: 1, createdAt: -1 });
    res.json(leaders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get single leader by ID
// @route   GET /api/leaders/:id
// @access  Public
const getLeaderById = async (req, res) => {
  try {
    const leader = await Leader.findById(req.params.id);
    if (!leader) {
      return res.status(404).json({ msg: 'Leader not found' });
    }
    res.json(leader);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Leader not found' });
    }
    res.status(500).send('Server error');
  }
};

// @desc    Create leader
// @route   POST /api/leaders
// @access  Private
const createLeader = [
  upload.single('image'),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Handle file upload
      let imagePath = '';
      if (req.file) {
        imagePath = `/uploads/${req.file.filename}`;
      }

      const leaderData = {
        ...req.body,
        image: imagePath
      };

      const leader = new Leader(leaderData);
      await leader.save();
      res.json(leader);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
];

// @desc    Update leader
// @route   PUT /api/leaders/:id
// @access  Private
const updateLeader = [
  upload.single('image'),
  async (req, res) => {
    try {
      // Handle file upload
      let updateData = { ...req.body };
      if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`;
      }

      const leader = await Leader.findByIdAndUpdate(
        req.params.id,
        { $set: updateData },
        { new: true }
      );

      if (!leader) {
        return res.status(404).json({ msg: 'Leader not found' });
      }

      res.json(leader);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Leader not found' });
      }
      res.status(500).send('Server error');
    }
  }
];

// @desc    Delete leader
// @route   DELETE /api/leaders/:id
// @access  Private
const deleteLeader = async (req, res) => {
  try {
    const leader = await Leader.findByIdAndDelete(req.params.id);

    if (!leader) {
      return res.status(404).json({ msg: 'Leader not found' });
    }

    res.json({ msg: 'Leader removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Leader not found' });
    }
    res.status(500).send('Server error');
  }
};

module.exports = {
  getAllLeaders,
  getActiveLeaders,
  getLeaderById,
  createLeader,
  updateLeader,
  deleteLeader,
};