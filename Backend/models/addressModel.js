const mongoose = require("mongoose");
const User = require("./registrationModel");

const schema = mongoose.Schema;

const addressSchema = new schema ({
    userId: {
        type: schema.Types.ObjectId,
        ref: 'User'
      },
    houseNo:{
        type:'String',
        required:true
    },
    area:{
        type:'String',
        required:true
    },
    location:{
        type:'String',
        required:true
    },
    landmark:{
        type:'String',
        required:true
    },
    city:{
        type:'String',
        required:true
    },
    state:{
        type:'String',
        required:true
    },
    district:{
        type:'String',
        required:true
    },
    pincode:{
        type:'String',
        required:true
    }
});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;