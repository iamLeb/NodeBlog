const express = require('express')
const session = require('express-session');
const cookieSession = require('cookie-session');
const passport = require('passport');
const database = require('./database/connect');
const app = express();
const engine = require('express-edge');
require('dotenv').config()
const port = process.env.PORT || 5000; // port initialization
const routes = require('./routes/web');
const adminRoute = require('./routes/admin/webAdmin');
const setup = require('./config/setup');
// import middleware
const redirect = require('./middlewares/redirect');

app.use(express.urlencoded({extended: true}));
app.use(engine); // use the express-edge templating
app.set('view engine', `${__dirname}/views`)
app.use(express.static('public'));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

// initialize passport
app.use(passport.initialize())
app.use(passport.session());

// app.use('/admin', adminRoute);
app.use('/', routes);
app.use('/admin',redirect, adminRoute);

app.listen(port, () => { console.log(`*** Listening to port ${port} ***`) });