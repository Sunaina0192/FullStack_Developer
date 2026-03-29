// import React, { useState } from 'react'


// ======================================increase or decrease====================================
// const App = () => {

//   const [num, setNum] = useState(0);

//    function increaseNum(){
//     setNum(num+1);
//   }
//    function decreaseNum(){
//     setNum(num-1);

//   }
//   function JumpNum(){
//     setNum(num+5);

//   }
    
//   return (
 
//     <div>
//       <h1>hello</h1>
//      <p>Number is {num}</p>
//      <button onClick={increaseNum}>Increase</button>
//      <button onClick={decreaseNum}>Decrease</button>
//      <button onClick={JumpNum}>Increase by 5</button>
//     </div>
//   )
// }

// export default App




// ===========================================Ref  object=======================
// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState({name:'Sunina',age:18});

//   function changeState(){
//     const newNum = {...num};  //destructreing same to same copy paste krliya per ref dono ka same ni hai 
//     newNum.name="Manjot"
//     setNum(newNum);


// }}}}}}}}}}}}}}}}}}}}}]Another Type]]]]]]]]]]]]]]]]]]]]]]

// setNum(prev=>({...prev,age:50}));
//   }
//   return (
//     <div>
//       <h1>{num.name}, {num.age}</h1>
//       <button onClick={changeState}>Clicked</button>
//     </div>
//   )
// }

// export default App




// =====================================Ref array===================================
import React, { use, useState } from 'react'

const App = () => {

  const [num, setNum] = useState([10,20,30,40]);
  function array(){
    const newArray= [...num];
    newArray.push(222);
    setNum(newArray);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={array}>clicked</button>
    </div>
  )
}

export default App



