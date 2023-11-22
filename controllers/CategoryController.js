const Category = require('../models/Category');

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
                console.log('FOund')
                res.redirect('/admin/categories');
            } else {
                console.log('Not found')
                new Category(req.body)
                    .save();
                res.redirect('/admin/categories');
            }
        });
}

const show = (req, res) => {

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