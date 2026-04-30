const express = require('express');
const cors =require('cors');

const app =express();

// middleware use cors to allow cross-origin requests from frontend
app.use(cors({
    origin: "http://localhost:5173" //frontend url
}))

app.get('/api/data',(req,res)=>{
  console.log("Backend received request ");
    
  res.json({
    message:"hello from backend to frontend",
    // time: new Date().toLocaleTimeString(),
  })
})


app.listen(5000, () =>{
    console.log("Server is running on port http://localhost:5000");
})

