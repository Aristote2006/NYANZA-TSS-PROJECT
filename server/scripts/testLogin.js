const connectDB = require('../src/config/db');
const Admin = require('../src/models/Admin');

const testLogin = async () => {
  try {
    // Connect to database
    await connectDB();

    // Find the admin user
    const adminUser = await Admin.findOne({ email: 'nyanzatss@gmail.com' });
    
    if (!adminUser) {
      console.log('Admin user not found in database');
      process.exit(0);
    }

    console.log('Admin user found in database:');
    console.log('- ID:', adminUser._id.toString());
    console.log('- Username:', adminUser.username);
    console.log('- Email:', adminUser.email);
    console.log('- Role:', adminUser.role);
    console.log('- Has password?', !!adminUser.password);
    
    // Test password matching
    const isMatch = await adminUser.matchPassword('admin@2026');
    console.log('- Password matches test:', isMatch);
    
    process.exit(0);
  } catch (error) {
    console.error('Error testing login:', error.message);
    process.exit(1);
  }
};

testLogin();