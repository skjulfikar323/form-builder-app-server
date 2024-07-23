const mongoose = require('mongoose');
const config = require('config');

mongoose.connect('mongodb+srv://Admin:123@cluster0.zogwti7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));
console.log("Database connected");


const db = mongoose.connection;

module.exports = db;


