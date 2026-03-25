import http from 'http';
import userData from './data.js';

let user = userData;

const app =http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");
     res.setHeader("Access-Control-Allow-Origin", "*"); 

    //  options request (CORS preflight)
    if(req.method === "OPTIONS"){
        res.writeHead(200,{
             "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST , PUT , PATCH , DELETE",
            "Access-Control-Allow-Headers": "Content-Type"
        });
        res.end();
        return;
    }

    // getdata
    if(req.method === "GET"){
        res.end(JSON.stringify(user));
    }

    // Post
    else if(req.method === "POST"){
        let body ="";

        req.on("data", chunk =>{
            body +=chunk;
        });

        req.on("end",()=>{
            const newUser = JSON.parse(body);
            user ={id:1,...newUser};

            res.end(JSON.stringify({
                msg:"USer Created Successfully",
                user
            }));
        });
    }

    // PUT 
    else if(req.method === "PUT"){
        let body="";

        req.on("data",chunk =>{
            body += chunk;
        });

        req.on("end",()=>{
            const updateUser =JSON.parse(body);
            user={
                id:1,
                ...updateUser
            };
            res.end(JSON.stringify({
                message:"User FUlly Updated",
                user
            }));
        });
    }

    // Patch 
    else if(req.method === "PATCH"){
       let body="";

       req.on("data",chunk =>{
        body +=chunk;
       });

       req.on("end",()=>{
        const updatedField =JSON.parse(body);

        // important line (spread operator)
        user={
            ...user,          //old data
            ...updatedField    //sirf updated field overwrite
        };

        res.end(JSON.stringify({
            msg:"User partially updated",
            user
        }));
       });
    }
});

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})
