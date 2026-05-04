const express =require('express');
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

// delete -removing the existing data
app.delete("/api/user",(req,res)=>{
    console.log("Delete /api/user called");
    if(!user){
        return res.json({
            message:"USer already deleletd",
        });
    }
    user=null; //removed data

    res.json({
        message:"user deleted successfully",
    });
})

app.listen(5000,()=>{
    console.log("server is running on http://localhost:5000");
})