const connectDB = require('../src/config/db');
const Admin = require('../src/models/Admin');
const bcrypt = require('bcryptjs');

const ensureAdmin = async () => {
  try {
    // Connect to database
    await connectDB();

    // Check if admin user already exists
    let adminUser = await Admin.findOne({ email: 'nyanzatss@gmail.com' });
    
    if (adminUser) {
      console.log('Admin user already exists, updating password...');
      
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin@2026', salt);
      
      // Update the password
      adminUser.password = hashedPassword;
      await adminUser.save();
      
      console.log('Admin password updated successfully');
    } else {
      console.log('Creating new admin user...');
      
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin@2026', salt);

      // Create new admin user
      adminUser = new Admin({
        username: 'nyanzatss',
        email: 'nyanzatss@gmail.com',
        password: hashedPassword,
        role: 'admin'
      });

      await adminUser.save();
      console.log('Admin user created successfully');
    }
    
    console.log('Admin details:');
    console.log('- ID:', adminUser._id);
    console.log('- Username:', adminUser.username);
    console.log('- Email:', adminUser.email);
    console.log('- Role:', adminUser.role);
    console.log('- Created At:', adminUser.createdAt);
    
    process.exit(0);
  } catch (error) {
    console.error('Error ensuring admin user:', error.message);
    process.exit(1);
  }
};

ensureAdmin();