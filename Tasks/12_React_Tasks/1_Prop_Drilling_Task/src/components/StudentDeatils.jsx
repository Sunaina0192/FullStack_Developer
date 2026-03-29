// -=============================task 2=================
//  import React from 'react'

// const StudentDeatils = (props) => {
//   return (
//     <div>
//       <h1>Here is the Full Deatail of a Student </h1><br />
//       <h2>Name: {props.details.name}</h2>
//       <h2>Roll No: {props.details.rollNo}</h2>
//       <h2>City: {props.details.city}</h2>
//     </div>
//   )
// }

// export default StudentDeatils


// ==============================task 6=  grandchild=====================

import React from 'react'

const StudentDeatils = (props) => {
  return (
    <div>
      <button onClick={() => props.sendRating(5)}>
        Give 5 Star ⭐
      </button>
    </div>
  )
}

export default StudentDeatils
