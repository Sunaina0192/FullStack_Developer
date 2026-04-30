import React, {useState,useEffect} from 'react'

const BackendServerCatch = () => {
  const [value,setValue] = useState(null);

  useEffect(()=>{
    fetch('http://localhost:5000/api/data')
    .then(response => response.json())
    .then(data => {
      console.log("Frontend received data from backend successfully:",data);
      setValue(data);
    })
    .catch(error => console.log("Error something went wrong while fetching data from backend:",error))
  },[])
 

  return (
    <div>
      <h1>Fetching Data from Backend</h1>
      {value ? (
        <>
         <p>Message: {value.message}</p> 
         {/* <p>Time:{value.time}</p> */}
          </>
        ) :  (
        <p>Loading</p>
        )}
    </div>
  )
}

export default BackendServerCatch
