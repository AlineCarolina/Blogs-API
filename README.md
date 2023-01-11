# Project Blogs API ! 

In this project I architected and developed an API for a CRUD blog post (following REST principles). 
To make a post, you need a user and a login (with a valid email address) as the API returns an authentication token that is used to post for each user.

---

## About the project

This project was developed with a focus on learning how to use the ORM Sequelize for communicating the API with the MySQL database.

---

## Technologies used

* JavaScript
* Node.js
* Express
* MySQL
* Sequelize
* JWT

---

## How to run the project

To run the project locally:
1. Clone the repository
```
$ git clone git@github.com:AlineCarolina/Blogs-API.git
```
2. Install dependencies
```
$ npm install
```
3. Create an .env file with the necessary environment variables, for example:
```
HOSTNAME=localhost
MYSQL_USER=root
MYSQL_PASSWORD=12345
JWT_SECRET=hkjdagsdge
PORT=3000
```
4.Also make these settings for the environment variables used in the file **sd-014-a-project-blogs-api/config/config.js**
```
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```
5. Create the database and generate the tables:
```
$ npm run prestart
```
6. Insert data into the table:
```
$ npm run seed
```
7. Finally, to start the server in development mode just run the command
```
$ npm start
```

---
