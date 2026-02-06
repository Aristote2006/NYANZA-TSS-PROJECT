const News = require('../models/News');
const { body, validationResult } = require('express-validator');
const upload = require('../middlewares/uploadMiddleware');

// @desc    Get all news
// @route   GET /api/news
// @access  Public
const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ publishedDate: -1 });
    res.json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get featured news
// @route   GET /api/news/featured
// @access  Public
const getFeaturedNews = async (req, res) => {
  try {
    const featuredNews = await News.find({ isFeatured: true })
      .sort({ publishedDate: -1 })
      .limit(3);
    res.json(featuredNews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get single news by ID
// @route   GET /api/news/:id
// @access  Public
const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ msg: 'News not found' });
    }
    res.json(news);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'News not found' });
    }
    res.status(500).send('Server error');
  }
};

// @desc    Create news
// @route   POST /api/news
// @access  Private
const createNews = [
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

      const newsData = {
        ...req.body,
        image: imagePath,
        publishedDate: new Date()
      };

      const news = new News(newsData);
      await news.save();
      res.json(news);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
];

// @desc    Update news
// @route   PUT /api/news/:id
// @access  Private
const updateNews = [
  upload.single('image'),
  async (req, res) => {
    try {
      // Handle file upload
      let updateData = { ...req.body };
      if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`;
      }

      const news = await News.findByIdAndUpdate(
        req.params.id,
        { $set: updateData },
        { new: true }
      );

      if (!news) {
        return res.status(404).json({ msg: 'News not found' });
      }

      res.json(news);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'News not found' });
      }
      res.status(500).send('Server error');
    }
  }
];

// @desc    Delete news
// @route   DELETE /api/news/:id
// @access  Private
const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);

    if (!news) {
      return res.status(404).json({ msg: 'News not found' });
    }

    res.json({ msg: 'News removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'News not found' });
    }
    res.status(500).send('Server error');
  }
};

module.exports = {
  getAllNews,
  getFeaturedNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
};