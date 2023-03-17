require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./models/ranja.js');

const bcryptSalt = bcrypt.genSaltSync(10);
const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
mongoose.connect(process.env.MONGO_URI);

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    console.log(name, email, password)
    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        })
        res.json(userDoc);
    } catch (e) {
        res.status(422).json(e);
    }




})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(`Email Address:-${email},Password:-${password}`)
    const userDoc = await User.findOne({ email });
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({ email: userDoc.email, id: userDoc._id }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json('Pass ok');
            });
        } else {
            res.status(422).json('Pass not OK');
        }

    } else {
        res.json('not found');
    }

});

app.listen(4000, () => {
    console.log("Server is Listening on port 4000.....")
});
