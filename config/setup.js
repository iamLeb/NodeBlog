const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config();
const User = require('../models/User');
const {redirect} = require("../controllers/PageController");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user));
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/auth/google/redirect',
        scope: ['profile']
    }, (accessToken, refreshToken, profile, done) => {
        // catch call back from Google
        // console.log(profile.photos[0].value);

        //check if user already exists
        User.findOne({googleid: profile.id})
            .then(existUser => {
                if (existUser) {
                    // do not add new user
                    done(null, existUser);
                } else {
                    new User({
                        googleId: profile.id,
                        name: profile.displayName,
                        photo: profile.photos[0].value
                    }).save().then(newUser => {
                        done(null, newUser);
                    });
                }
        });
    })
);