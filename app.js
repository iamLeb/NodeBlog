const express = require('express')
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


app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.KEYS]
}));

// initialize passport
app.use(passport.initialize())
app.use(passport.session());
app.use(routes);


app.listen(port, () => { console.log(`*** Listening to port ${port} ***`) });