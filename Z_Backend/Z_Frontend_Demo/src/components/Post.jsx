import React from 'react'

const Post = () => {
    function handleLogin(){
        console.log("Frontend: sending Post request...");

        fetch("http://localhost:5000/api/user",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                username:"sunaina",
                age:22,
                password:"sunaina123@",
            }),
            }).then((res)=>res.json())
            .then((data)=>{
                console.log("frontend: received response:",data);

                alert(`Message: ${data.message}\n Age:${data.age}\n Password:${data.password}`);
            })
        }
    
  return (
    <div>
      <h2>Post</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Post
