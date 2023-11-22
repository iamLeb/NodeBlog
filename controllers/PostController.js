const Post = require('../models/Post');
const Category = require('../models/Category');

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
    new Post(req.body)
        .save();
    res.redirect('/admin/posts');
}

const show = (req, res) => {
    const id = req.params.id;
    Post.findById(id)
        .then(post => {
            res.render('admin/posts/show', { post });
        });
}

const update = (req, res) => {
    const id = req.params.id;
    // update based on id
}

const destroy = (req, res) => {
    const id = req.params.id;
    // delete based on id
}

module.exports = {
    index,
    create,
    store,
    show,
    update,
    destroy,
}