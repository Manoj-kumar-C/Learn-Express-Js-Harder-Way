const express = require("express")

const app = express();

app.set("view engine", "ejs")

app.use(express.json())

// importing routes

const home = require("./routes/home")



app.set("views", "./views")
app.get("/", function(req,res){
    res.send("Home Page")
})

app.get('/register', function(req, res){
    res.render("register")
})

app.use("/home", home);

const port = process.env.port || 3000
app.listen(port, console.log("sucessfully"))