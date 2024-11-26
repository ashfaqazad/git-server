const mongoose = require('mongoose');

// Define Product schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,  // Changed from date to Date
        default: Date.now
    }

});

// Create and export model
const User = mongoose.model('User', userSchema);
module.exports = User;