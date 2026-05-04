import React, {useState,useEffect} from 'react'

const Get = () => {
    const [data,setData] = useState({});

    useEffect(()=>{
          fetch('http://localhost:5000/user/data')
          .then(res=>res.json())
          .then((data)=>{
            console.log("Data is received successfully from backend bro:", data);
            setData(data);
          })
          .catch(err =>console.log("error",err));
    },[])
  return (
    <div>
        <h1>Get Request from Backend</h1>
        <p>Name: {data.name}</p>
        <p>City: {data.city}</p>
        <p>Country: {data.country}</p>
    </div>
  )
}

export default Get
