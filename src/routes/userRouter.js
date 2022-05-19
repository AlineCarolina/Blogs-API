const express = require('express');

const { validateUser } = require('../middlewares/validateUser');
const { validateToken } = require('../middlewares/validateToken');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', validateUser, userController.create);

router.get('/', validateToken, userController.getAll);

router.get('/:id', validateToken, userController.getById);

module.exports = router;