const express = require("express");

const { addFormByUser } = require("../controller/userController");

const router = express.Router();

router.post("/addForm", addFormByUser);

module.exports = router;
