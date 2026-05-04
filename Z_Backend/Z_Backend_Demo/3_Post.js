const express =require('express');
const cors =require('cors');

const app =express();
app.use(cors());
app.use(express.json());

app.post('/api/user',(req,res)=>{
    console.log("Post request received at /api/user");
    console.log("Received data:",req.body);
    const{username,age,password}=req.body;

    res.json({
        message:`Welcome, ${username}!`,
        age:age,
        password:password,
    });
});

app.listen(5000,()=>{
    console.log("Server is running on port http://localhost:5000");
});