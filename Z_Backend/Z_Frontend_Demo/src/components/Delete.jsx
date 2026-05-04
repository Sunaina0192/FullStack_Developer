import React,{useState,useEffect} from 'react'

const Delete = () => {
    const [user,setUser]=useState(null);

    useEffect(()=>{
        fetch("http://localhost:5000/api/user")
        .then((res)=>res.json())
        .then((data)=>{
            console.log("user data fetched: ",data);
            setUser(data);
        })
    },[]);

    function handleDelete(){
        fetch("http://localhost:5000/api/user",{
            method:"DELETE",
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log("delete response: ",data);
            alert(data.message);
            setUser(null); //update ui
        });
    }
  return (
    <div>
      <h2>Delete Method</h2>
      {user ?(
        <>
        <p><b>NAme: </b>{user.name}</p>
        <p><b>Age: </b>{user.age}</p>

        <button onClick={handleDelete}>Delete user</button>
        </>
      ):(
        <p>User has been Deleted</p>
      )}
    </div>
  );
}

export default Delete
