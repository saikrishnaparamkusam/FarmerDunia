const express = require("express");
const router = express.Router();

const addAddressHandler = require("../controllers/addAddressController");
router.post("/addAddress", addAddressHandler);

module.exports = router;