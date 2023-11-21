const express = require('express')
const session = require('express-session');
const cookieSession = require('cookie-session');
const passport = require('passport');
const database = require('./database/connect');
const app = express();
const engine = require('express-edge');
const port = 3000;
const routes = require('./routes/web');
const setup = require('./config/setup');

require('dotenv').config()
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

app.use(routes);


app.listen(port, () => { console.log(`*** Listening to port ${port} ***`) });