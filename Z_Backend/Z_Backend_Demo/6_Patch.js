const express = require('express');
const cors =require('cors');

const app=express();
app.use(cors());
app.use(express.json());

// existing data (acting like a database)
let user={
    id:1,
    name:"sunaina",
    age:22,
};
// get- fetching existing user

app.get('/api/user',(req,res)=>{
    console.log("get /api/user called");
    res.json(user);
});

// patch - updating existing data
app.patch("/api/user",(req,res)=>{
    console.log("Patch /api/user called");
    console.log("Request body: ",req.body);
    
    user={...user,...req.body}; //updating existing data with new data

    res.json({
        message:"user updated successfully",
        user,
    });
    });

    app.listen(5000,()=>{
        console.log("server is running on http://localhost:5000");
    });