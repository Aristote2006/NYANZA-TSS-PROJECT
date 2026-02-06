const Program = require('../models/Programs');
const { body, validationResult } = require('express-validator');
const upload = require('../middlewares/uploadMiddleware');

// @desc    Get all programs
// @route   GET /api/programs
// @access  Public
const getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find()
      .sort({ createdAt: -1 });
    res.json(programs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get active programs only
// @route   GET /api/programs/active
// @access  Public
const getActivePrograms = async (req, res) => {
  try {
    const programs = await Program.find({ isActive: true })
      .sort({ createdAt: -1 });
    res.json(programs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get single program by ID
// @route   GET /api/programs/:id
// @access  Public
const getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ msg: 'Program not found' });
    }
    res.json(program);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Program not found' });
    }
    res.status(500).send('Server error');
  }
};

// @desc    Create program
// @route   POST /api/programs
// @access  Private
const createProgram = [
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

      const programData = {
        ...req.body,
        image: imagePath
      };

      const program = new Program(programData);
      await program.save();
      res.json(program);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
];

// @desc    Update program
// @route   PUT /api/programs/:id
// @access  Private
const updateProgram = [
  upload.single('image'),
  async (req, res) => {
    try {
      // Handle file upload
      let updateData = { ...req.body };
      if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`;
      }

      const program = await Program.findByIdAndUpdate(
        req.params.id,
        { $set: updateData },
        { new: true }
      );

      if (!program) {
        return res.status(404).json({ msg: 'Program not found' });
      }

      res.json(program);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Program not found' });
      }
      res.status(500).send('Server error');
    }
  }
];

// @desc    Delete program
// @route   DELETE /api/programs/:id
// @access  Private
const deleteProgram = async (req, res) => {
  try {
    const program = await Program.findByIdAndDelete(req.params.id);

    if (!program) {
      return res.status(404).json({ msg: 'Program not found' });
    }

    res.json({ msg: 'Program removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Program not found' });
    }
    res.status(500).send('Server error');
  }
};

module.exports = {
  getAllPrograms,
  getActivePrograms,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram,
};