const express =require('express');
const cors =require('cors');

const app=express();
app.use(cors());
app.use(express.json());

// Fake Database
let user={
    id:1,
    name:'sunaina',
    age:22,
    role:'Developer',
};

// Get - Fetching data
app.get("api/user",(req,res)=>{
    console.log("Get Request Received");
    res.json(user);
});

// Post -Creating Data
  app.post("api/user",(req,res)=>{
    console.log("Post Request Received");
    console.log("recieved Data:",req.body);

    user={id:Date.now(), ...req.body};
    res.json({
        message:"User created",
        user,
    }); 
  });

//   Put - Updating Data
 app.put("api/user",()=>{
      console.log("📩 PUT /api/user");
  console.log("📦 Full data received:", req.body);

  user = req.body; // full replacement

  res.json({
    message: "User replaced using PUT",
    user,
  });
});

// Patch - Updating Data
app.patch("/api/user", (req, res) => {
  console.log("📩 PATCH /api/user");
  console.log("📦 Partial data received:", req.body);

  user = { ...user, ...req.body };

  res.json({
    message: "User partially updated using PATCH",
    user,
  });
});


// Delete - Deleting Data
app.delete("/api/user", (req, res) => {
  console.log("📩 DELETE /api/user");

  user = null;

  res.json({
    message: "User deleted",
  });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});


