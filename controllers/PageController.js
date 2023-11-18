const index = (req, res) => {
    res.render('index');
}

const about = (req, res) => {
    res.render('about');
}
const contact = (req, res) => {
    res.render('contact');
}

const login = (req, res) => {
    res.render('auth/login');
}
const redirect = (req, res) => {
    res.send('Code redirected from google')
}

module.exports = {
    index,
    about,
    contact,
    login,
    redirect
}