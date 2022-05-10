const express = require('express');

const { validateToken } = require('../../middlewares/validateToken');
const { validateCategorie } = require('../../middlewares/validateCategorie');

const categorieController = require('../../controllers/categorieController');

const router = express.Router();

router.post('/', validateToken, validateCategorie, categorieController.create);
router.get('/', validateToken, categorieController.getAll);

module.exports = router;