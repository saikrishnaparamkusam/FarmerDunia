const express = require("express");
const router = express.Router();
const Registration = require("../models/registrationModel.js");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try{
        const { firstname, lastname, email, mobilenum, role, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Registration ({
            firstName: firstname,
            lastName: lastname,
            email: email,
            mobileNumber: mobilenum,
            role: role,
            password: hashedPassword
        });
        await user.save();
        res.status(200).send("USER REGISTERED");
    }catch (error){
        console.log(error);
        res.status(400).send("USER REGISTRATION FAILED");
    }

});

module.exports = router;