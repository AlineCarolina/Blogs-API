require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1d', 
  });

  return token;
};

module.exports = {
    createToken,
};