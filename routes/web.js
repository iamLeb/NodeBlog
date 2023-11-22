const router = require('express').Router();
const PageController = require('../controllers/PageController');
const passport = require('passport');
const UserController = require('../controllers/UserController');
const PostController = require('../controllers/PostController');
const CategoryController = require('../controllers/CategoryController');

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

router.get('/admin/posts', redirect, PostController.index);
router.get('/admin/posts/create', redirect, PostController.create);
router.get('/admin/posts/show/:id', redirect, PostController.show);
router.post('/admin/posts/store', redirect, PostController.store);

// category Route
router.get('/admin/categories', redirect, CategoryController.index);
router.get('/admin/categories/create', redirect, CategoryController.create);
router.post('/admin/categories', redirect, CategoryController.store);

router.post('/admin/logout', redirect, UserController.logout);

module.exports = router;