const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
const configJWT = { expiresIn: '5m', algorithm: 'HS256' };

const generateToken = (payload) => jwt.sign(payload, secretKey, configJWT);

module.exports = generateToken;
