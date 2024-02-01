
require('./config/db');//requiring access to the database
const express = require('express');
const app = express();

const port = 3005;
const UserRouter = require('./app/user');
// const bodyParser = require('express').json();
app.use(express.json());
app.use('/user', UserRouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})



