const mongoose = require('mongoose');
require('dotenv').config();

//declare a func, connectDB that connects to db asynchronously
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {dbName: 'Snipshots'}); //orginal way we had it
    console.log('Connected to MongoDB Atlas');
  } catch(error){
    console.log('MongoDB Atlas connection error:', error);
  }
}

module.exports = connectDB;