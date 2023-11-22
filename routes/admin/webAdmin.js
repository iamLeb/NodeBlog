const router = require('express').Router();
const UserController = require('../../controllers/UserController');
const PostController = require('../../controllers/PostController');
const CategoryController = require('../../controllers/CategoryController');

// Admin Routes
router.get('/', UserController.index);

router.get('/posts', PostController.index);
router.get('/posts/create', PostController.create);
router.get('/posts/show/:id', PostController.show);

// category Route
router.get('/categories', CategoryController.index);
router.get('/categories/create', CategoryController.create);
router.get('/categories/show/:id', CategoryController.show);

router.post('/categories', CategoryController.store);
router.post('/categories/update/:id', CategoryController.update);
router.post('/categories/destroy/:id', CategoryController.destroy);

router.post('/posts/store', PostController.store);
router.post('/posts/update/:id', PostController.update);
router.post('/posts/destroy/:id', PostController.destroy);

router.post('/logout', UserController.logout);

module.exports = router;