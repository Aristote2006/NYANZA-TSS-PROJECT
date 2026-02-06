const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// Initialize admin user if in production
if (process.env.NODE_ENV === 'production') {
  const initAdmin = require('../scripts/initAdmin');
  // Execute after DB connection is established
  setTimeout(initAdmin, 1000);
}

// Enable CORS with options for both development and production
const allowedOrigins = [
  'http://localhost:3000', 
  'http://localhost:3001',
  process.env.CLIENT_URL
].filter(Boolean); // Remove undefined values

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/leaders', require('./routes/leadersRoutes'));
app.use('/api/programs', require('./routes/programsRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Server error occurred' });
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  
  // Handle SPA routing - serve index.html for any non-API route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
  });
} else {
  // In development, also serve the React app from client/build if it exists
  // This helps with direct navigation to routes
  app.use(express.static('client/build'));
  
  // Handle SPA routing in development too
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
  });
}

module.exports = app;