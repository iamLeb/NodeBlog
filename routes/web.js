const router = require('express').Router();
const PageController = require('../controllers/PageController');
const AuthController = require('../controllers/AuthController');
const passport = require('passport');

// import middleware
const auth = require('../middlewares/auth');

router.get('/', PageController.index);
router.get('/about', PageController.about);
router.get('/contact', PageController.contact);
router.get('/auth/login',auth, AuthController.login);

router.get('/auth/google', passport.authenticate('google'));
router.get('/auth/google/redirect',passport.authenticate('google'), AuthController.redirect);

module.exports = router;