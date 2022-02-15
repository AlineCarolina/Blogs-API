const express = require('express');
const bodyParser = require('body-parser');

const { validateUser } = require('./middlewares/validateUser');
const { validateLogin } = require('./middlewares/validateLogin');
const { validateToken } = require('./middlewares/validateToken');
const { validateCategorie } = require('./middlewares/validateCategorie');
const { validateBlogPost } = require('./middlewares/validateBlogPost');
const { errorMiddleware } = require('./middlewares/errorMiddleware');

const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const categorieController = require('./controllers/categorieController');
const blogPostController = require('./controllers/blogPostController');

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

app.post('/categories', validateToken, validateCategorie, categorieController.create);

app.get('/categories', validateToken, categorieController.getAll);

app.post('/post', validateToken, validateBlogPost, blogPostController.create);