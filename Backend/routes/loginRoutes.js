const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Registration = require("../models/registrationModel.js");


const loginHandler = async (req, res) => {
    try{
        const {emailOrMobile, password} = req.body;
        let isMatchedPassword;
        const user = await Registration.findOne({
            $or: [
              { email: emailOrMobile },
              { mobileNumber: emailOrMobile }
            ]
          });
          if (user) {
            isMatchedPassword = await bcrypt.compare(password, user.password);
            if (isMatchedPassword){
                res.status(200).send(user);
            }
            else{
                res.status(400).send("Invalid Password");
            }
          } else {
            console.log('User not found');
          } 
    }catch(err) {
        response.status(400).send("Bad request");
    }
};


router.post("/", loginHandler);
module.exports = router;