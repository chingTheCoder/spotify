const express = require("express")
let app = express()
let port = 80


let spotify = require("./routes/spotify")
let audio = require("./audio")

app.use(express.static("public"))
app.set("view engine", "hbs")
app.use("/spotify/", spotify)
app.use("/audio", audio)


//if the route does not exist

app.get("/", (req, res) => {
    res.render("account")
})



app.post("/login", (req,res) => {
    //validate email and password
    res.redirect("/spotify")
})

app.get("/playlist", (req, res) => {
    res.sendFile(__dirname + "/playlist.json")
})

app.listen(port , () => {
    console.log("listenning from spotify servers")
})
