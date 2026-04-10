import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import Card from './components/Card';
const App = () => {
const [userData,setUserData]=useState([]);
const [index,setIndex]=useState(1);

  const getData = async()=>{
   const response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
   setUserData(response.data);
  //  console.log(response.data)
  
  }
    useEffect(function(){
    getData();
  },[index])

  let printUserData =<h3 className='text-gray-200 text-sm absolute top-1/2 left-1/2 text-semibold translate-x-1/2 translate-y-1/2'>Loading...</h3>;
  if (userData.length > 0){
    printUserData =userData.map(function(elem,idx){
      return <div key={idx}>
       <Card elem={elem}/>
      </div>
    })
  }

  return (
   
    <div className='bg-black h-screen p-4 overflow-auto text-white'>
      {/* <button onClick={getData} className='bg-green-600 active:scale-95 text-white px-5 py-2 rounded'>Get Data</button> */}
      <div className='flex h-[82%] flex-wrap gap-4 px-10 pt-20'>{printUserData}</div>
    <div className='flex justify-center gap-6 items-center p-4'>
      <button 
      style={{opacity: index == 1 ? 0.5 : 1}}
      className='bg-amber-400 text-black rounded px-4 py-2 cursor-pointer active:scale-95 text-sm font-semibold' 
      onClick={()=>{
        if(index >1){
          setIndex(index-1) 
          setUserData([])
        }     
      }}>Prev</button> 
      <h4>page{index}</h4>
      <button className='bg-amber-400 text-black rounded px-4 py-2 cursor-pointer active:scale-95 text-sm font-semibold'
      onClick={()=>{
      setUserData([])       
       setIndex(index+1)  
      }}>Next</button>
    </div>
    </div>
  )
}

export default App
