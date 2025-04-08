const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
console.log("the secret key is in verify.js:" + SECRET_KEY);
const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(403).json({ message: 'Access denied' });

    try {
        const decoded = await jwt.verify(token.split(' ')[1], SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
        console.log(err);
    }
};

module.exports = verifyToken;