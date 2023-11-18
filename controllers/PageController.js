const index = (req, res) => {
    res.render('index', { user: req.user});
}

const about = (req, res) => {
    res.render('about');
}
const contact = (req, res) => {
    res.render('contact');
}

const login = (req, res) => {
    res.render('auth/login', { user: req.user });
}
const redirect = (req, res) => {
    res.redirect('/admin');
}


module.exports = {
    index,
    about,
    contact,
    login,
    redirect,
}