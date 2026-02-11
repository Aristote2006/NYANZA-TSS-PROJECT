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
  process.env.CLIENT_URL,
  process.env.FRONTEND_URL
].filter(Boolean); // Remove undefined values

const corsOptions = {
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Allow requests from allowed origins
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    // For production, you might want to be more restrictive
    if (process.env.NODE_ENV === 'production') {
      // Check if the origin ends with .onrender.com (for Render deployments)
      if (origin && (origin.includes('.onrender.com') || origin.includes('localhost'))) {
        return callback(null, true);
      }
    }
    
    // Otherwise, reject the request
    callback(new Error('Not allowed by CORS'));
  },
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
  // Debug logging for Render deployment
  console.log('Production mode detected');
  console.log('__dirname:', __dirname);
  
  // Set static folder - check multiple possible locations for Render deployment
  const buildPath1 = path.join(__dirname, '../../client/build');
  const buildPath2 = path.join(__dirname, '../client/build');
  const buildPath3 = path.join(__dirname, '../../../client/build'); // Extra level up
  
  console.log('Checking build paths:');
  console.log('Path 1 (../../client/build):', buildPath1);
  console.log('Path 2 (../client/build):', buildPath2);
  console.log('Path 3 (../../../client/build):', buildPath3);
  
  // Check which paths exist
  const fs = require('fs');
  const path1Exists = fs.existsSync(buildPath1);
  const path2Exists = fs.existsSync(buildPath2);
  const path3Exists = fs.existsSync(buildPath3);
  
  console.log('Path existence check:');
  console.log('Path 1 exists:', path1Exists);
  console.log('Path 2 exists:', path2Exists);
  console.log('Path 3 exists:', path3Exists);
  
  // Use the first existing path, or fallback to a safe default
  let staticPath;
  let indexPath;
  
  if (path1Exists) {
    staticPath = buildPath1;
    indexPath = path.resolve(buildPath1, 'index.html');
  } else if (path2Exists) {
    staticPath = buildPath2;
    indexPath = path.resolve(buildPath2, 'index.html');
  } else if (path3Exists) {
    staticPath = buildPath3;
    indexPath = path.resolve(buildPath3, 'index.html');
  } else {
    // Fallback - try to find build directory in common locations
    console.log('No build directory found, checking alternative locations...');
    const alternativePaths = [
      path.join(process.cwd(), 'client/build'),
      path.join(process.cwd(), '../client/build'),
      path.join(__dirname, 'client/build')
    ];
    
    for (const altPath of alternativePaths) {
      console.log('Checking alternative path:', altPath);
      if (fs.existsSync(altPath)) {
        staticPath = altPath;
        indexPath = path.resolve(altPath, 'index.html');
        console.log('Found build directory at:', altPath);
        break;
      }
    }
  }
  
  console.log('Selected static path:', staticPath);
  console.log('Selected index path:', indexPath);
  
  if (staticPath && indexPath) {
    app.use(express.static(staticPath));
    
    // Handle SPA routing - serve index.html for any non-API route
    app.get('*', (req, res) => {
      console.log('Serving index.html from:', indexPath);
      res.sendFile(indexPath);
    });
  } else {
    console.log('WARNING: No client build directory found. API-only mode.');
    // API-only mode - don't serve static files
    app.get('*', (req, res) => {
      res.status(404).json({ msg: 'Client build not found - API only mode' });
    });
  }
} else {
  // In development, also serve the React app from client/build if it exists
  // This helps with direct navigation to routes
  const devBuildPath = path.join(__dirname, '../client/build');
  if (require('fs').existsSync(devBuildPath)) {
    app.use(express.static(devBuildPath));
  }
  
  // Handle SPA routing in development too
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(devBuildPath, 'index.html'));
  });
}

module.exports = app;