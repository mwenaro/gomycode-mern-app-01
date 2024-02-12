const mongoose = require('mongoose');

// Define your MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/o-store';

// Function to connect to the MongoDB database
async function connectToDatabase() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect to the database
module.exports = {connectToDatabase}
