// contains the req types put ,delete, get, post 


const express = require('express');
const app = express();
const port = 3000;


app.get('/api', (req,res)=>{
    res.send("hello")
})

app.put('/api', (req,res)=>{
    res.send("Put Request")
})

app.delete('/api', (req,res)=>{
    res.send("Delete Request")
})
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
