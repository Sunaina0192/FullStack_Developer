import React from 'react'

const App = () => {

  // 1. localStorage  basically browser main date ko store krwane ke liye use hota hai yeh data permanentaly data ko store krna  
  // 1.1 localStorage.clear(); //yeh local storage ko clear krne ka kam krta hai 
  // 1.2 localStorage.setItem('age','20') //data jo store krwate hao key value ki pair main store krte hai object ki form main
  // 1.3 const user= localStorage.getItem('user'); //data ko lena by puting only one thing key
        //  const age= localStorage.getItem('age'); 
        // console.log(user);
        // console.log(age);
  // 1.4  localStorage.removeItem('user'); //data ko remove krne ke liye use hota hai       

  // 2.Session Storage jo hai woh temporarry data ko store krna jab tak browser on hai chalege jab tab close toh data is deleted....
  // sessionStorage.clear() //yeh session stprage ko clear krne ka kam krt hi 


// ================================Array , Object ko retrieve krna======================================
// const user={
//   userName:'sunaina',
//   age:20,
//   city:'Mohali'
// }
// localStorage.setItem('user',JSON.stringify(user))


const user=localStorage.getItem('user');
console.log(JSON.parse(user))
  return (
    <div>
      <h1>heyyy</h1>
    </div>
  )
}

export default App
