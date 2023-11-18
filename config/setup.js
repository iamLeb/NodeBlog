const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config();

passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/auth/google/redirect',
        scope: ['profile']
    }, (accessToken, refreshToken, profile, done) => {
        // catch call back from Google
        console.log('Code here -- testing ')
    })
);