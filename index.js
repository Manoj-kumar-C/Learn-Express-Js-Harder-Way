const express = require("express")

const app = express();

app.set("view engine", "ejs")



app.set("views", "./views")
app.get("/", function(req,res){
    res.send("Home Page")
})

app.get('/register', function(req, res){
    res.render("register")
})


app.listen(3000, console.log("sucessful"))