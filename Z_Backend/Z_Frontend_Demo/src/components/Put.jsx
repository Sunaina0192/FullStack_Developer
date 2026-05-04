import React,{useState,useEffect} from 'react'

const Put = () => {
  
  const [user,setUser] =useState(null);

  useEffect(()=>{
    fetch('http://localhost:5000/api/user')
    .then(res=>res.json())
    .then(data=>{
        console.log("user fetched: ",data);
        setUser(data);
    });
  },[]);

  function updateWithPut(){
    console.log('sending PUT request');
    fetch("http://localhost:5000/api/user",{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:"sunaina updated",
        }),
    }).then(res =>res.json())
    .then(data=>{
        console.log("Put response:",data);
        setUser(data.user);
    });
  }

  if(!user) return <p>Loading...</p>

  return (
    <div>
      <h2>Put Method</h2>
      <p>Name:{user.name}</p>
        <p>Age:{user.age}</p>
        <p>Role:{user.role}</p>
        <button onClick={updateWithPut}>Update User with PUT</button>
    </div>
  )
}

export default Put
