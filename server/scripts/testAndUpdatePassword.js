const connectDB = require('../src/config/db');
const Admin = require('../src/models/Admin');
const bcrypt = require('bcryptjs');

const testLogin = async () => {
  try {
    await connectDB();
    
    const admin = await Admin.findOne({ email: 'nyanzatss@gmail.com' });
    if (!admin) {
      console.log('Admin not found');
      return;
    }
    
    console.log('Admin found:', admin.email, admin.username);
    console.log('Current password hash length:', admin.password.length);
    
    // Test with the password that should be in the DB
    const testPassword = 'admin@2026';
    const isMatch = await bcrypt.compare(testPassword, admin.password);
    console.log('Password match result:', isMatch);
    
    if (!isMatch) {
      console.log('Updating password...');
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(testPassword, salt);
      console.log('New hash length:', hashedPassword.length);
      
      // Don't use the model's save method to avoid the pre-save hook
      await Admin.updateOne(
        { _id: admin._id },
        { $set: { password: hashedPassword } }
      );
      
      console.log('Password updated in database');
      
      // Fetch the admin again to verify
      const updatedAdmin = await Admin.findById(admin._id);
      console.log('Updated password hash length:', updatedAdmin.password.length);
      
      // Test again
      const isMatch2 = await bcrypt.compare(testPassword, updatedAdmin.password);
      console.log('Password match after update:', isMatch2);
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

testLogin();