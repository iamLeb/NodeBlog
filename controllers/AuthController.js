const login = (req, res) => {
    res.render('auth/login', { user: req.user });
}
const redirect = (req, res) => {
    res.redirect('/admin');
}

module.exports = {
    login,
    redirect,
}