const News = require('../models/News');
const Programs = require('../models/Programs');
const Leaders = require('../models/Leaders');
const ContactMessage = require('../models/ContactMessage');

// @desc    Get analytics data
// @route   GET /api/analytics/stats
// @access  Private
const getAnalyticsStats = async (req, res) => {
  try {
    // Get counts from different models
    const totalNews = await News.countDocuments();
    const totalPrograms = await Programs.countDocuments();
    const totalLeaders = await Leaders.countDocuments();
    const totalMessages = await ContactMessage.countDocuments();
    const unreadMessages = await ContactMessage.countDocuments({ status: 'pending' });

    // Calculate engagement metrics (mock data based on content)
    const totalContent = totalNews + totalPrograms + totalLeaders;
    const engagementRate = totalContent > 0 ? Math.min(95, 60 + (totalContent * 0.5)).toFixed(1) : 0;
    
    // Mock visitor statistics (in a real app, you'd use Google Analytics or similar)
    const baseVisitors = 1000;
    const totalVisitors = baseVisitors + (totalContent * 50);
    const pageViews = totalVisitors * 3.5;
    const avgSessionDuration = Math.floor(180 + (engagementRate * 2)); // in seconds

    // Format session duration as minutes and seconds
    const minutes = Math.floor(avgSessionDuration / 60);
    const seconds = avgSessionDuration % 60;
    const sessionDurationStr = `${minutes}m ${seconds}s`;

    res.json({
      visitors: {
        total: totalVisitors.toLocaleString(),
        change: '+12.5%'
      },
      pageViews: {
        total: Math.floor(pageViews).toLocaleString(),
        change: '+8.2%'
      },
      engagementRate: {
        value: `${engagementRate}%`,
        change: '+5.3%'
      },
      avgSessionDuration: {
        value: sessionDurationStr,
        change: '+3.1%'
      },
      content: {
        news: totalNews,
        programs: totalPrograms,
        leaders: totalLeaders
      },
      messages: {
        total: totalMessages,
        unread: unreadMessages
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get traffic sources
// @route   GET /api/analytics/traffic
// @access  Private
const getTrafficSources = async (req, res) => {
  try {
    // In a real application, this would come from analytics service
    res.json([
      { source: 'Direct', percentage: 45, color: '#3498db' },
      { source: 'Social Media', percentage: 25, color: '#e74c3c' },
      { source: 'Search Engines', percentage: 20, color: '#2ecc71' },
      { source: 'Referrals', percentage: 10, color: '#f39c12' }
    ]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get top pages
// @route   GET /api/analytics/top-pages
// @access  Private
const getTopPages = async (req, res) => {
  try {
    // Mock top pages data based on actual content
    const newsCount = await News.countDocuments();
    const programsCount = await Programs.countDocuments();
    
    const topPages = [
      { page: '/', views: 12450 },
      { page: '/programs', views: 8765 },
      { page: '/about', views: 6543 },
      { page: '/news', views: 5432 },
      { page: '/contact', views: 4321 },
    ];

    res.json(topPages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  getAnalyticsStats,
  getTrafficSources,
  getTopPages
};
