
require('./config/db');//requiring access to the database

const app = require('express')();

const port = 3000;
const UserRouter = require('./app/user');

const bodyParser = require('express').json;
app.use(bodyParser());
app.use('/user', UserRouter)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})