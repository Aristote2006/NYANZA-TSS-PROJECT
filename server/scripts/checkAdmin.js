const mongoose = require('mongoose');
const Admin = require('../src/models/Admin');
require('dotenv').config();

const checkAdmin = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('MongoDB Connected');
    
    // Check if admin exists
    const admin = await Admin.findOne({ email: 'nyanzatss@gmail.com' });
    
    if (admin) {
      console.log('Admin found:');
      console.log('Email:', admin.email);
      console.log('Username:', admin.username);
      console.log('Role:', admin.role);
      console.log('Created At:', admin.createdAt);
    } else {
      console.log('Admin not found');
    }
    
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

checkAdmin();