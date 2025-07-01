const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.3";
  

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI );
        console.log('✅ Connected to MongoDB successfully!');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
    }
};

module.exports = connectDB;
