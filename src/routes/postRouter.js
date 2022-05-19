const express = require('express');

const { validateToken } = require('../middlewares/validateToken');
const { validateBlogPost } = require('../middlewares/validateBlogPost');

const blogPostController = require('../controllers/blogPostController'); 

const router = express.Router();

router.post('/', validateToken, validateBlogPost, blogPostController.create);

router.get('/', validateToken, blogPostController.getAll);

module.exports = router;