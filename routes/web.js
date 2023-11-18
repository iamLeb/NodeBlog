const router = require('express').Router();
const PageController = require('../controllers/PageController');
const passport = require('passport');

router.get('/', PageController.index);
router.get('/about', PageController.about);
router.get('/contact', PageController.contact);
router.get('/auth/login', PageController.login);

router.get('/auth/google', passport.authenticate('google'));
router.get('/auth/google/redirect',passport.authenticate('google'), PageController.redirect);

module.exports = router;