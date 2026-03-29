// =================================================Fetch Api call=========================================

// import React from 'react'

// const App = () => {

//   // promise ,jab data ko call kra woh process chalri hai asynchronous call kra aur turant data chahiye 
//   // toh woh turant data ni ayega woh samye legaga toh woh process asynchronously work krti hai  
//   // js by default aynchronous hai per asynchronous work krti hai api call krte tym
  
  
//   // async function Clicked(){
//   //        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   //         console.log(response)
//   // }


//       const getData = async() => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//          const data= await response.json()
//          console.log(data);
//    } 


//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   )
// }

// export default App





// ===========================================Axios api Call=======================================================
// npm install axios  third party api ,setup easy,errors ko easily manage krta hai,loading easy
// import React from 'react'
// import axios from 'axios'
// const App = () => {

//   const getData = async () => {
//     const response= await axios.get('https://jsonplaceholder.typicode.com/todos')
//     console.log(response.data)
//   }
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   )
// }

// export default App


// ====================================================================

import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

  const [data,setData]= useState([])

   const getData = async ()=> {
         const response= await axios.get('https://picsum.photos/v2/list')
         setData(response.data);
      }  
 
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        
        {data.map(function(elem,idx){
          return <h2> hello, {elem.author}{idx}</h2>
        })}
      </div>
    </div>
  )
}

export default App
