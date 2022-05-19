const express = require('express');

const { validateLogin } = require('../middlewares/validateLogin');

const loginController = require('../controllers/loginController');

const router = express.Router();

router.post('/', validateLogin, loginController.login);

module.exports = router;