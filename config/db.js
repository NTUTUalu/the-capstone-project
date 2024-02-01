
require('dotenv').config();

const mongoose = require("mongoose");
//UseNewUrlParser: true,
//UseUnifiedTopology: true,
mongoose.connect(process.env.MONGODB_URI, { }).then(()=> {
    console.log("DB Connected");
}).catch((err) => console.log(err));