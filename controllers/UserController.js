const index = (req, res) => {
    res.render('admin/index', { user: req.user });
}

const logout = (req, res) => {
    req.logout();
    res.redirect('/');
}
module.exports = {
    index,
    logout,
}