// express is a npm package , its a framework and its manages everything from receving and giving back to response

import express from 'express';

const app = express();
// routing
app.get('/',(req,res)=>{
    res.send("HELLO i am the Best version of my self");
})

app.get('/profile',(req,res)=>{
    res.send("You r Basically in my Profile page");
})

// server create 
app.listen(3000 ,()=>{
    console.log("Server is running on http://localhost:3000");
})