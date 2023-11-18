const express = require('express')
const database = require('./database/connect');
const app = express();
const engine = require('express-edge');
const port = 3000;
const routes = require('./routes/web');
const GoogleStrategy = require('./config/setup');
app.use(engine); // use the express-edge templating
app.set('view engine', `${__dirname}/views`)
app.use(express.static('public'));

app.use(routes);


app.listen(port, () => { console.log(`*** Listening to port ${port} ***`) });