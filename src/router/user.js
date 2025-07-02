const express= require("express");
const User = require('../model/User.Model')
const { signup } = require("../controller/auth.controller")

const router = express.Router();

router.post("/login", (req, res) => {
    User
    res.send("accepted");
});

router.post("/signup", signup)


module.exports = router;
