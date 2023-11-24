const Category = require('../models/Category');
const Post = require("../models/Post");
const model = require("../models/Model");

const index = (req, res) => {
    Category.find()
        .then(categories => {
            if (categories) {
                res.render('admin/category/index', { categories });
            } else {
                res.render('admin/category/index');
            }
        });
}

const create = (req, res) => {
    // render view
    res.redirect('admin/categories');
}

const store = (req, res) => {
    // store requests
    Category.findOne({name: req.body.name})
        .then(found => {
            if (found) {
                res.redirect(`/admin/categories`);
            } else {
                model.store(req, res, Category, '/admin/categories');
            }
        });
}

const show = (req, res) => {
    const id = req.params.id;
    Category.findById(id)
        .then(category => {
            res.render('admin/category/show', { category });
        });
}

const update = (req, res) => {
    const id = req.params.id;
    model.update(req, res, Category, '/admin/categories');
}

const destroy = (req, res) => {
    // delete based on id
    model.destroy(req, res, Category, '/admin/categories');
}

module.exports = {
    index,
    create,
    store,
    show,
    update,
    destroy,
}