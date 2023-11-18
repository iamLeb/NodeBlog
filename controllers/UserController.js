const index = (req, res) => {
    res.render('admin/index', { user: req.user });
}

module.exports = {
    index,
}