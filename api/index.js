require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./db/connect');


const authenticateUser = require('./middleware/auth');
const authRouter = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use('/', authRouter);


const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("connected to the database successfully");
        app.listen(port, () => {
            console.log('Server is listening to port 4000.....')
        });

    } catch (error) {
        console.log(error);
    }
}
start();

