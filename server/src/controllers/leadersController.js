const Leader = require('../models/Leaders');
const { body, validationResult } = require('express-validator');

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
const createLeader = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const leader = new Leader(req.body);
    await leader.save();
    res.json(leader);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update leader
// @route   PUT /api/leaders/:id
// @access  Private
const updateLeader = async (req, res) => {
  try {
    const leader = await Leader.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
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
};

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