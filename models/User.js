const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
}, {timestamps: true});

// model for user
const User = mongoose.model('User', userSchema);

module.exports = User;