const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
const configJWT = { expiresIn: '5m', algorithm: 'HS256' };

const generateToken = (payload) => jwt.sign(payload, secretKey, configJWT);

const validateToken = (token) => {
    if (!token) throw new Error('Token not found');
    try {
      const isValid = jwt.verify(token, secretKey);
      return isValid;
    } catch (err) {
      throw new Error('Expired or invalid token');
    }
  };

module.exports = { generateToken, validateToken };
