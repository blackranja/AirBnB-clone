const Users = require('../models/users');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');

const register = async (req, res) => {
    const user = await Users.create({ ...req.body });
    const token = user.createJWT();
    res.status(200).json({
        user: {
            name: user.name
        }, token
    });
}
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {

    }

    const user = await Users.findOne({ email });
    if (!user) {

    }
    if (!isPasswordCorrect) {

    }
    const token = user.createJWT();
    res.status(200).json({ user: { name: user.name }, token });
}


module.exports = { register, login };