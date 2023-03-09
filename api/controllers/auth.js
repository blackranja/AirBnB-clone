const Users = require('../models/Users');
const register = async (req, res) => {
    const user = await Users.create({ ...req.body });
    const token = user.createJWT();
    res.status(201).json({
        user: user.name
    }, token);
    const login = async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            //--------------------------------------
            ////return Error code
            ///-------------------------------------
        }

        const user = await Users.findOne({ email });
        if (!user) {
            ///=================================
            ///return Error code
            ///==================================
        }
        if (!isPasswordCorrect) {
            ////Throw Error code
        }
        const token = user.createJWT();
        res.status(200).json({ user: { name: user.name }, token });
    }
}

module.exports = { register, login };