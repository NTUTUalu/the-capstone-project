import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
//below we import the schema
import  User  from "./models/signUpModel.js";
import bcrypt from "bcryptjs"
import cors from "cors";

const app = express();


//this is middleware for parsing request body
//it helps us to send data to the server in a json format that can be understood by the browser
app.use(express.json());
app.use(cors());


app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).json("welcome to Poultry plus");
}); //to help us retrieve data from a server

//Route to saving a new book
// since working with mongoose is an async process we use "async"
app.post("/Signup", async (request, response) => {
  try {
    if (
      !request.body.mobileNumber ||
      !request.body.password ||
      !request.body.confirmPassword
    ) {
      return response.status(400).send({
        message:
          "send all required fields: mobileNumber, password, confirmPassword ",
      });
    }

       //below we are going to hash the password
       const hashedPassword = await bcrypt.hash(request.body.password, 5);
       const hashedConfirmPassword = await bcrypt.hash(request.body.confirmPassword,5);


    //below we create a variable for your new book
    const newUser = {
      mobileNumber: request.body.mobileNumber,
      password: hashedPassword,
      confirmPassword: hashedConfirmPassword,
    };

   //await user user and check if they exit
    const user = await User.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//create a route to get all books from a database
app.post("/login", async (request, response) => {
  const {mobileNumber, password} = request.body;
  try {
    
    const user = await User.findOne({ mobileNumber});
    if (
      !mobileNumber 
    ) {
      return response.status(401).send({
        message:
          "user does not exist ",
      });
    }

    // 
    const validUser = bcrypt.compare(password, user.password);
    if (!validUser) return  response.status(401).send({
      message:
        "Invalid credentials ",
    });

    return response.status(200).json({message: "Login successful"});

  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});

//mongoose will help us establish connection to the database
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("App connected to the database");

    //we put the line below here because we want the server to run only when we have connection to the database
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
    
  })
  .catch((error) => {
    console.log(error);
  });


 