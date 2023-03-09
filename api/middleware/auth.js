const User = require('../models/users');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        ///Throw Error
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = User.findById(payload.id).select('-password');
        req.user = user;
        req.user = { userId: payload.userId, name: payload.name };
        next();

    } catch (error) {
        ///Throw Error
    }
}
module.exports = auth;