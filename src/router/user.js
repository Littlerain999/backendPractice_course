const express= require("express");




const router = express().router;

router.get("/login", (req, res) => {
    res.send("accepted");
});

module.exports = router;