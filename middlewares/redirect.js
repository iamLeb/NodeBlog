module.exports = (req, res, next) => {
    if (req.user) {
        next();
    }
    res.redirect('auth/login');
}
