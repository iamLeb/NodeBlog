const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserScheme = new Schema({
    googleId: String,
    name: String,
    email: String,
    photo: String
}, {timestamps:true});

// create model
const User = mongoose.model('user', UserScheme);

module.exports = User;