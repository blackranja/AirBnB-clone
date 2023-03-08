const express = require('express');
const app = express();
app.get('/test', (req, res) => {
    res.json('test ok');
});
app.listen(4000, () => {
    console.log('Server is listening to port 4000.....')
});