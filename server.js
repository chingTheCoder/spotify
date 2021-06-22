const express = require("express")
let app = express()
let port = 80


app.use(express.static("public"))
app.set("view engine", "hbs")

app.get("/", (req, res) => {
    res.render("account")
})



app.listen(port , () => {
    console.log("listenning from spotify servers")
})
