const router = require('express').Router();
const PageController = require('../controllers/PageController');
const passport = require('passport');
const UserController = require('../controllers/UserController');

// import middleware
const redirect = require('../middlewares/redirect');
const auth = require('../middlewares/auth');

router.get('/', PageController.index);
router.get('/about', PageController.about);
router.get('/contact', PageController.contact);
router.get('/auth/login',auth, PageController.login);

router.get('/auth/google', passport.authenticate('google'));
router.get('/auth/google/redirect',passport.authenticate('google'), PageController.redirect);

// Admin Routes
router.get('/admin', redirect, UserController.index);
router.get('/logout', UserController.logout);

module.exports = router;