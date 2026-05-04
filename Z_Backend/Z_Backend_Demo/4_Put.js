const express = require('express');
const cors =require('cors');

const app =express();
app.use(cors());
app.use(express.json());

let userData = {
    id:1,
    name:"sunaina",
    age:22,
    role:"developer",
}

// get user
app.get('/api/user',(req,res)=>{
    console.log("Get request received at /api/user");
    res.json(userData);
});

// Put - replace the entire user 
app.put('/api/user',(req,res)=>{
    console.log("Put request received at /api/user");
    console.log("Received data:",req.body);
    userData = req.body;
    res.json({
        message:"User data updated successfully",
        user:userData,
    });
});

app.listen(5000,()=>{
    console.log("server is running on port http://localhost:5000");
})




