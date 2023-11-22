const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
}, {timestamps: true});

// create models
const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;