const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
      type: String,
      required: true
    },
    user: {
        type: String,
        required: true
    }
}, {timestamps: true});

// create models
const Post = mongoose.model('Post', PostSchema);
module.exports = Post;