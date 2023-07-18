const express = require("express");
const router = express.Router();

const addAddressHandler = require("../controllers/addressController");
router.post("/addAddress", addAddressHandler);

module.exports = router;