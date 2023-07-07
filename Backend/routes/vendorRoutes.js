const express = require("express");
const router = express.Router();

const testHandler = async (req, res) => {
    res.send("test successs....");
};
router.get("/farmerList", testHandler);

module.exports = router;