const mongoose = require("mongoose");

const schema = mongoose.Schema;


const registrationSchema = new schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{10}$/
      },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
        enum: ["admin", "vendor", "consumer"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
},
{ collection: 'users' }
);

const Registration = mongoose.model('Registration', registrationSchema);
module.exports = Registration;