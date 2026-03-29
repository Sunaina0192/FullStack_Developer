// import React from 'react'

// const App = () => {
//   function submitHandler(e){
//    e.preventDefault()
//     console.log("form submitted")
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e);
//       }}>
//         <input type="text" placeholder='Enter your name' />
//         <button >Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App






// =======================================Two way binding ek teer se do nishanee================================

import React, { useState } from 'react'

const App = () => {

  const [title, seTitle] = useState('');
  function submitHandler(e){
   e.preventDefault()
    console.log("form submitted by", title);
    seTitle('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter your name' value={title} onChange={(e)=>{
          seTitle(e.target.value)
        }} />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
