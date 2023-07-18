const Address = require("../models/addressModel.js");
const addAddressHandler = async (req, res) => {
    try{
        const { userId, houseNo, area, location, landmark, city, state, district, pincode} = req.body;
        const address = new Address ({
            userId, houseNo, area, location, landmark, city, state, district, pincode
        });
        await address.save();
        res.status(200).send("Address Added");
    }catch (error){
        console.log(error);
        res.status(400).send("Address adding failed");
    }
};

module.exports = addAddressHandler;