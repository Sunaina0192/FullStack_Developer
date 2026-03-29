// =====================task 1=====================

// import React from 'react'
// import StudentItem from './StudentItem'
// const StudentList = (props) => {
//   return (
//     <div>
//       <StudentItem details={props.details}/>
//     </div>
//   )
// }

// export default StudentList

// =======================task 4==================
// import React from 'react'

// const StudentList = (props) => {
//   return (
//     <div>
//       <h2>Student List</h2>
//       {props.students.map((elem,idx)=>(
//          <div key={idx}>
//           <h3>{elem.name}</h3>
//           <p>{elem.rollNo}</p>
//           <p>{elem.class}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default StudentList


// ========================task 6== Grandchild====================
import React from 'react'
import StudentDetails from './StudentDeatils'

const StudentList = (props) => {
  return (
    <div>
      <StudentDetails sendRating={props.sendRating} />
    </div>
  )
}

export default StudentList



