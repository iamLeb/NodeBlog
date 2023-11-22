const Category = require("../models/Category");
const Post = require("./Post");
const update = (req, res, model, location) => {
    const id = req.params.id;
    // update based on id
    model.findByIdAndUpdate(id, req.body)
        .then(model => {
            if (model) {
                res.redirect(location);
            }
        });
}

const store = (req, res, model, location) => {
    // store requests
    new model(req.body)
        .save();
    res.redirect(location);
}

const destroy = async (req, res, model, location) => {
    const id = req.params.id;
    await model.findByIdAndDelete(id);
    res.redirect(location);
}

module.exports = {
    update,
    store,
    destroy
}

