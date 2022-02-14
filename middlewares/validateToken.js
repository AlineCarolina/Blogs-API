require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
    const result = jwt.verify(token, process.env.JWT_SECRET);
  
    return result;
  };

const validateToken = (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);

    if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
    try {
      verifyToken(authorization);
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    return next();
  };

module.exports = {
    validateToken,
};