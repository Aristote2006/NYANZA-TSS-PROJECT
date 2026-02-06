const connectDB = require('../src/config/db');
const Admin = require('../src/models/Admin');
const bcrypt = require('bcryptjs');

const setPasswordCorrectly = async () => {
  try {
    // Connect to database
    await connectDB();

    // Find the admin user
    const adminUser = await Admin.findOne({ email: 'nyanzatss@gmail.com' });
    
    if (!adminUser) {
      console.log('Admin user not found in database');
      process.exit(0);
    }

    // Hash the password properly
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin@2026', salt);

    // Update directly without triggering the save hook
    await Admin.updateOne(
      { _id: adminUser._id },
      { $set: { password: hashedPassword } }
    );

    console.log('Password updated correctly in database');

    // Verify the update
    const updatedUser = await Admin.findById(adminUser._id);
    const isMatch = await updatedUser.matchPassword('admin@2026');
    console.log('Password verification after update:', isMatch);

    process.exit(0);
  } catch (error) {
    console.error('Error setting password correctly:', error.message);
    process.exit(1);
  }
};

setPasswordCorrectly();