const connectDB = require('../src/config/db');
const Admin = require('../src/models/Admin');
const bcrypt = require('bcryptjs');

const initAdmin = async () => {
  try {
    // Connect to database
    await connectDB();

    // Check if admin user already exists
    const existingAdmin = await Admin.findOne({ email: 'nyanzatss@gmail.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Create default admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin@2026', salt);

    const adminUser = new Admin({
      username: 'nyanzatss',
      email: 'nyanzatss@gmail.com',
      password: hashedPassword,
      role: 'admin'
    });

    await adminUser.save();
    console.log('Default admin user created successfully');
  } catch (error) {
    console.error('Error initializing admin user:', error.message);
  }
};

initAdmin();

module.exports = initAdmin;