// useEffect = api call krna ,dom manupilation Side effect krne ke liye use hoti hai useEffect
// 1. useEffect -har baar state chalne pe useEffect chale (Mounting)
// if we pass an dependences then component did mount for a  once



// import React, { useEffect, useState } from 'react'

// const App = () => {

//     const [num, setNum] = useState(0);
//     const [number, setNumber] = useState(100);


//     useEffect(function(){
//         console.log('use Effect is running...')
//     },[num])
//   return (
//     <div>
//         <h2>num{num}</h2>
//         <h2>number{number}</h2>
//       <button onClick={()=>{
//         setNum(num+1)
//         setNumber(number+10);
//       }}>Click</button>
//     </div>
//   )
// }

// export default App









// ========================
import React, { useEffect, useState } from 'react'

const App = () => {

   const [a,setA] =useState(0);
   const [b,setB] =useState(0);

    function aChanging(){
        console.log("A is changing...")
    }

    function bChanging(){
        console.log("B is changing...")
    }

    useEffect(function(){
        aChanging();
        console.log("useEffect is running...")
    },[a])
  return (
    <div>
        <h1>A is {a}</h1>
        <h1>B is {b}</h1>
      <button onClick={()=>{setA(a+1)}}>Change A</button>
      <button onClick={()=>{setB(b-1)}}>Change B</button>
    </div>
  )
}

export default App

