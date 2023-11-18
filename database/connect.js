const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_CONNECTION)
    .then(result => console.log('-- Connection Established --'))
    .catch(err => console.log('error connecting to db'));

module.exports = mongoose;