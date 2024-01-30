const express = require("express")

const app = express();

// importing the swagger ui libraries 

const swagger = require('swagger-ui-express')

const swaggerJsdoc = require('swagger-jsdoc')



app.set("view engine", "ejs")

app.use(express.json())

// importing routes

const home = require("./src/routes/home")



app.set("views", "./src/views")
app.get("/", function(req,res){
    res.send("Home Page")
})

app.get('/register', function(req, res){
    res.render("register")
})

app.use("/home", home);



// swagger implementation 

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Your API',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes/*.js'], // Specify the path to your route files
  };

  
const specs = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI at /api-docs
app.use('/api-docs', swagger.serve, swagger.setup(specs));

const port = process.env.port || 3000
app.listen(port, console.log("successfully"))