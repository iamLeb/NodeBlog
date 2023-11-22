const index = (req, res) => {
    res.render('index', { user: req.user});
}

const about = (req, res) => {
    res.render('about');
}
const contact = (req, res) => {
    res.render('contact');
}




module.exports = {
    index,
    about,
    contact,
}