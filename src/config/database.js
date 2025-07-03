const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://aadityaskillspark:E0hJOFIR4Rvya0PX@cluster0.pojylot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI );
        console.log('✅ Connected to MongoDB successfully!');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
    }
};

module.exports = connectDB;
