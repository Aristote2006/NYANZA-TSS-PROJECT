const connectDB = require('../src/config/db');
const Admin = require('../src/models/Admin');
const bcrypt = require('bcryptjs');

const fixPasswordHash = async () => {
  try {
    // Connect to database
    await connectDB();

    // Find the admin user
    const adminUser = await Admin.findOne({ email: 'nyanzatss@gmail.com' });
    
    if (!adminUser) {
      console.log('Admin user not found in database');
      process.exit(0);
    }

    console.log('Current password hash:', adminUser.password);

    // Manually test the password with bcrypt
    const testResult = await bcrypt.compare('admin@2026', adminUser.password);
    console.log('Password verification test result:', testResult);

    // Re-hash the password properly
    const saltRounds = 10;
    const newPassword = 'admin@2026';
    const newHash = await bcrypt.hash(newPassword, saltRounds);
    
    console.log('New hash to be applied:', newHash);

    // Update the password hash
    adminUser.password = newHash;
    await adminUser.save();

    console.log('Password hash updated successfully');
    
    // Verify the update worked
    const updatedUser = await Admin.findOne({ email: 'nyanzatss@gmail.com' });
    const verifyResult = await bcrypt.compare('admin@2026', updatedUser.password);
    console.log('Verification after update:', verifyResult);
    
    process.exit(0);
  } catch (error) {
    console.error('Error fixing password hash:', error.message);
    process.exit(1);
  }
};

fixPasswordHash();