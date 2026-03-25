// jab bhi server request accept krta hai waha se route ke beech paunchne tak agar app us request ko beech main rokte ho and kush perform krte ho ,to yeh element middleware kehlata hai.

import express from "express";
const app =express();

// middleware chalane ke do tareke....
// frontend backend frontend (request and respond handling)
app.use(function(req,res,next){
    console.log("Middleware is working: bro");
    next();
})
app.use(function(req,res,next){
    console.log("Middleware is working one more time again......");
    next();
})

app.get('/',function(req,res){
    res.send("heyy i am ready to do exprees js......");
});

app.get('/about',function(req,res){
    res.send("this is the about page ......");
});

app.get('/profile',function(req,res,next){
    return next(new Error("Something Went Wrong")) //console pe
});

// error handling
app.use((err,req,res,next)=>{
    console.error(err.stack); // frontend pe
    res.status(500).send("Something Broke!");
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})