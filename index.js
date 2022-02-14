const express = require('express');
const bodyParser = require('body-parser');

const { validateUser } = require('./middlewares/validateUser');
const { validateLogin } = require('./middlewares/validateLogin');
const { validateToken } = require('./middlewares/validateToken');
const { errorMiddleware } = require('./middlewares/errorMiddleware');

const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('Escutando na porta 3000'));

app.use(errorMiddleware);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validateUser, userController.create);

app.post('/login', validateLogin, loginController.login);

app.get('/user', validateToken, userController.getAll);

app.get('/user/:id', validateToken, userController.getById);