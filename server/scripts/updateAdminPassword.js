const connectDB = require('../src/config/db');
const Admin = require('../src/models/Admin');
const bcrypt = require('bcryptjs');

const updateAdminPassword = async () => {
  try {
    // Connect to database
    await connectDB();

    // Find the admin user
    const adminUser = await Admin.findOne({ email: 'nyanzatss@gmail.com' });
    
    if (!adminUser) {
      console.log('Admin user not found');
      process.exit(0);
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin@2026', salt);

    // Update the password
    adminUser.password = hashedPassword;
    await adminUser.save();

    console.log('Admin password updated successfully');
    console.log('Email:', adminUser.email);
    console.log('Username:', adminUser.username);
    console.log('Role:', adminUser.role);
    process.exit(0);
  } catch (error) {
    console.error('Error updating admin password:', error.message);
    process.exit(1);
  }
};

updateAdminPassword();