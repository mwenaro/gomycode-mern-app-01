const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Define your MongoDB connection URI
const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI || 'mongodb://localhost:27017/o-store';

// Load the environment variables from the.env file
dotenv.config();
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
