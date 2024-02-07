import express from "express";
import {PORT,MONGODB_URL} from "./config.js";
import mongoose from 'mongoose'

const app = express();

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send('welcome to Poultry plus');
});//to help us retrieve data from a server



//mongoose will help us establish connection to the database
mongoose.connect(MONGODB_URL).then(() => {
    console.log('App connected to the database');

    //we put the line below here because we want the server to run only when we have connection to the database
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    
    });
}).catch((error) => {
console.log(error);
});