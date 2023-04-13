const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
const configJWT = { expiresIn: '5m', algorithm: 'HS256' };

const generateToken = (payload) => jwt.sign(payload, secretKey, configJWT);

const validateToken = (token) => {
    const error = new Error('Token not found');
    error.status = 401;
    if (!token) throw error;
    try {
      const isValid = jwt.verify(token, secretKey);
      return isValid;
    } catch (err) {
        const error1 = new Error('Expired or invalid token');
        error1.status = 401;
      throw error1;
    }
  };

module.exports = { generateToken, validateToken };
