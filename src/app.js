const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { errorMiddleware } = require('./middlewares/errorMiddleware');

const app = express();

app.use(bodyParser.json());

app.use(errorMiddleware);

app.use('/user', routes.userRouter);

app.use('/login', routes.loginRouter);

app.use('/categories', routes.categorieRouter);

app.use('/post', routes.postRouter);

module.exports = app;