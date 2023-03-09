const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Provide Name'],
        minlength: 3,
        maxlength: 50,

    },
    email: {
        type: String,
        required: [true, 'Please Prodived and Email'],
    },
    password: {
        type: String,
        required: [true, 'Please Provide a password'],
    },
})

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

UserSchema.methods.createJWT = function () {
    return jwt.sign(
        {
            userId: this._id,
            name: this.name
        },
        process.env.JWT_SECRET, { expiresIn: process.env.JWT_TIMETOLIVE }
    )
}
UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

module.exports = mongoose.model('Users', UserSchema);