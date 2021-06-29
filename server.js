const express = require("express")
let app = express()
let port = 80


let spotify = require("./routes/spotify")
let audio = require("./audio")

app.use(express.static("public"))
app.set("view engine", "hbs")
app.use("/spotify", spotify)
app.use("/audio", audio)

app.get("/", (req, res) => {
    res.render("account")
})



app.post("/login", (req,res) => {
    //validate email and password
    res.redirect("/spotify")
})

app.listen(port , () => {
    console.log("listenning from spotify servers")
})
