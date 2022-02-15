require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1d', 
  });

  return token;
};

const decodeToken = (authorization) => {
  const result = jwt.decode(authorization, process.env.JWT_SECRET);

  console.log('DECODE TOKEN', result);
  const id = 1;

  return id;
};

module.exports = {
    createToken,
    decodeToken,
};