const express = require("express")

const app = express();

app.set("view engine", "ejs")
app.set("view engine", "pug")


app.set("views", "./views")
app.get("/", function(req,res){
    res.send("Home Page")
})

app