const express = require('express');
const router = express.Router();

//import mongodb user model
const User = require("../models/user");

//password handler
const bcrypt = require('bcrypt');

//register motor
router.post("./signupMotor/page", (req,res) => {

})

//supplier signup 
router.post("./signupSupplier/page", (req,res) => {

})

//client signup
router.post("/signupClient/page", (req,res) => {
    let {mobileNumber, password, confirmPassword} = req.body;
    //next we trim white spaces
    console.log("executed")
    mobileNumber = mobileNumber.trim();
    password = password.trim();
    confirmPassword = confirmPassword.trim();

    if (mobileNumber == "" || password == "" || confirmPassword == "" ) {
        
        return res.status(400).json({
            status: "Failed",
            message: "One of the fields is empty"
        });
    }else if (mobileNumber.length < 9) {
        res.json({
            status: "Failed",
            message: "Invalid mobile number entered"
        })
    }else if (password.length <8) {
        res.json({
            status: "Failed",
            message: "Password too short"
        })
    }else if (confirmPassword.length <8) {
        res.json({
            status: "Failed",
            message: "Password too short"
        })
    }else if (confirmPassword.value != password.value) {
        res.json({
            status: "Failed",
            message: "Check that you entered the correct password"
        })
    } else {
        //checking if the user exists 
        //find user using the find function of the model
        User.find({mobileNumber}).then(result => {
            if (result.length) {
                //if the user exists return a message stating that the user already exists
                res.json ({
                    status: "Failed",
                    message: "User with the provided mobile number already exists"
                })
            }else {
                //if the user does not exist we create new user


                //password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User ({
                        mobileNumber,
                        password: hashedPassword,
                        confirmPassword
                    });
                    newUser.save().then(result=> {
                        res.json ({
                            status: "Success",
                            message: "Sign up Successful",
                            data: result,
                        })
                    }) .catch(err => {
                        res.json ({
                            status: "Failed",
                            message: "An error occured while saving the user account"
                        })
                    }) 
                }).catch(err => {
                    res.json ({
                        status: "Failed",
                        message: "An error occured while hashing the passsword"
                    })
                })
            }
        }).catch(err=> {
            console.log(err);
            res.json({
                status: "Failed",
                message: "Error occured when checking for existing user"
            })
        })
    }
})

//Login
router.post("./login/page", (req,res) => {

})


module.exports = router;
