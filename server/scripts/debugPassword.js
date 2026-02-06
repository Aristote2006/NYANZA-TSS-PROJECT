const connectDB = require('../src/config/db');
const Admin = require('../src/models/Admin');
const bcrypt = require('bcryptjs');

const debugPassword = async () => {
  try {
    // Connect to database
    await connectDB();

    // Find the admin user
    const adminUser = await Admin.findOne({ email: 'nyanzatss@gmail.com' });
    
    if (!adminUser) {
      console.log('Admin user not found in database');
      process.exit(0);
    }

    console.log('Current password hash in DB:', adminUser.password);
    console.log('Length of hash:', adminUser.password.length);

    // Direct bcrypt comparison
    const directCompare = await bcrypt.compare('admin@2026', adminUser.password);
    console.log('Direct bcrypt.compare result:', directCompare);

    // Try the model method
    const modelMethod = await adminUser.matchPassword('admin@2026');
    console.log('Model matchPassword method result:', modelMethod);

    // Let's manually hash and compare
    const manualHash = await bcrypt.hash('admin@2026', 10);
    console.log('Fresh hash of "admin@2026":', manualHash);

    const freshCompare = await bcrypt.compare('admin@2026', manualHash);
    console.log('Compare "admin@2026" with fresh hash:', freshCompare);

    // Update with fresh hash
    adminUser.password = manualHash;
    await adminUser.save();
    console.log('Updated with fresh hash');

    // Test again after update
    const updatedCompare = await bcrypt.compare('admin@2026', adminUser.password);
    console.log('Compare after update:', updatedCompare);

    const updatedModelMethod = await adminUser.matchPassword('admin@2026');
    console.log('Model method after update:', updatedModelMethod);

    process.exit(0);
  } catch (error) {
    console.error('Error debugging password:', error.message);
    process.exit(1);
  }
};

debugPassword();