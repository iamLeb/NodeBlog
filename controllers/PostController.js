const Post = require('../models/Post');
const Category = require('../models/Category');
const model = require("../models/Model");

const index = (req, res) => {
    Post.find()
        .then(posts => {
            if(posts) {
                res.render('admin/posts/index', {posts});
            } else {
                posts = 0;
                res.render('/admin/posts/index', {posts});
            }
        });
}

const create = (req, res) => {
    // render view
    Category.find()
        .then(categories => {
            if (categories) {
                res.render('admin/posts/create', {categories});
            } else {
                res.render('admin/category/create');
            }
        });
}

const store = (req, res) => {
    // store requests
    req.body.user = req.user.name;
    model.store(req, res, Post, '/admin/posts');
}

const show = (req, res) => {
    const id = req.params.id;
    Post.findById(id)
        .then(post => {
            res.render('admin/posts/show', { post });
        });
}

const update = (req, res) => {
    // update based on id
    model.update(req, res, Post, '/admin/posts');
}

const destroy = (req, res) => {
    model.destroy(req, res, Post, '/admin/posts')
}

module.exports = {
    index,
    create,
    store,
    show,
    update,
    destroy,
}