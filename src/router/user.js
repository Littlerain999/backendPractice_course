const express= require("express");
const User = require('../model/User.Model')

const router = express().router;

router.get("/login", (req, res) => {
    User
    res.send("accepted");
});

module.exports = router;