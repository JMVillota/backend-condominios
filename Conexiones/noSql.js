const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const DB_URI = "mongodb://mongo:to1rG4ZcGIGBs4JevL6F@containers-us-west-57.railway.app:7023"


const connectDB = async() => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;