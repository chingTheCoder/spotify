const express = require("express")
let router = express.Router()
let fs = require("fs")

router.get("/", (req, res) => {
    res.render("spotify")
})

module.exports = router