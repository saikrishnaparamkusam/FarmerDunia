const express = require("express");
const registrationHandler = require("../controllers/registrationControllers");
const router = express.Router();

    

router.post("/", registrationHandler);

module.exports = router;