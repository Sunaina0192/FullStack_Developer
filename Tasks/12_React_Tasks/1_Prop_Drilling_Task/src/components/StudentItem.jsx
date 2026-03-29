// ======================================1 task


// import React from 'react'

// const StudentItem = (props) => {
//   return (
//     <div>
//       <h1>Heelo My name is : {props.name}</h1>
//       <h2>My Age is {props.age}</h2>
//     </div>
//   )
// }

// export default StudentItem



// ==========================2. tasks=========
{/*
import React from 'react'
import StudentDetails from './StudentDeatils'
const StudentItem = (props) => {
  return (
    <div>
      <StudentDetails details={props.details}/>
    </div>
  )
}

export default StudentItem*/}



// ==========================3. tasks=========

// import React from 'react'

// const StudentItem = (props) => {
//   const object={
//     name:'sunaina',
//     age:21,
//     city:'hoshiarpur'
//   }
//   return (
//     <div>
//       <h1>Passing Data from Child To Parent by using Calback</h1>
//      <button onClick={()=>{
//       props.studentData(object)
//      }}>Send Data To Parent</button>
//     </div>
//   )
// }

// export default StudentItem

// =========================task 6====child===========
import React from 'react'
import StudentList from './StudentList'

const StudentItem = (props) => {
  return (
    <div>
      <StudentList sendRating={props.sendRating} />
    </div>
  )
}

export default StudentItem








