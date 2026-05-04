const express = require('express');
const cors =require('cors');

const app =express();
app.use(cors());
app.use(express.json());

app.get('/user/data',(req,res)=>{
    console.log('Get/api/userData is called');

    res.json({
        name:'Sunaina',
        city:'Hoshiarpur',
        country:'india',
    })
})

app.listen(5000,()=>{
        console.log("Server is running on http://localhost:5000");
    })