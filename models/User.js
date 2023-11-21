const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserScheme = new Schema({
    googleId: String,
    name: String,
    photo: String
});

// create model
const User = mongoose.model('user', UserScheme);

module.exports = User;