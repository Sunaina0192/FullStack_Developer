// ====================1. Basic Props (Parent to child)================
// Task 1- Pass name and age from App to StudentItem


// import React from 'react'
// import StudentItem from './components/StudentItem'

// const App = () => {
//   return (
//     <div>
//       <StudentItem name="Sakshi" age="21"/>
//     </div>
//   )
// }

// export default App




//Task 2 — Props Drilling (Parent → Child → Grandchild)- Pass a student object from App → StudentList → StudentItem → StudentDetails
// import React from 'react'
// import StudentList from './components/StudentList'

// const App = () => {

//   const Student={
//        name:"Sunaina",
//        rollNo:22002011,
//        city:"Hoshiarpur",
//   }
//   return (
//     <div>
//       <StudentList details={Student}/>
//     </div>
//   )
// }

// export default App





// Task 3 — Child → Parent (Callback)- StudentItem sends data back to App using a function passed as props

// import React, { useState } from 'react'
// import StudentItem from './components/StudentItem'

// const App = () => {

//   const [studentData, setStudentData] = useState(null);

//   const handlingData =(data)=>{
//    setStudentData(data)
  
//   }
//   return (
//     <div>
//       <StudentItem studentData={handlingData}/>
//       {studentData && <div>
//         <h1>Name:{studentData.name}</h1>
//         <h1>Age:{studentData.age}</h1>
//         <h1>City:{studentData.city}</h1>
//         </div>}
//     </div>
//   )
// }

// export default App





// =========================== 4 — Sibling → Sibling (Indirect)- AddStudent sends new student to App, which updates StudentList.==========================

// AddStudent (child 1) → data bhejta hai App ko
// App state update karta hai
// StudentList (child 2) → updated data receive karta hai

// Matlab: Sibling → Parent → Sibling

// import React, { useState } from 'react'
// import AddStudent from './components/AddStudent'
// import StudentList from './components/StudentList';

// const App = () => {

//   const [students, setStudents] = useState([]);

//   const addStudentHandler =(Student)=>{
//     setStudents([...students,Student]);
//   }
//   return (
//     <div>
//       <AddStudent onAddStudent={addStudentHandler}/>
//             <StudentList students={students} />

//     </div>
//   )
// }

// export default App






// Task 5 — Passing Components as Props- Send as a prop into DisplayMessage and render it.
// import React from 'react'
// import DisplayMessage from './components/DisplayMessage'

// const App = () => {
//   const Message =()=>{
//     return <h1>Hello This 5 Task Passing Component as Props</h1>
//   }
//   return (
//     <div>
//       <DisplayMessage comp={<Message/>}/>
//     </div>
//   )
// }

// export default App



// TASk 6 — Passing Functions as Props (Grandchild → Parent)- StudentDetails sends rating back to App through all intermediate components.
// Parent
import React, { useState } from 'react'
import StudentItem from './components/StudentItem'

const App = () => {
  const [rating, setRating] = useState(0)

  const handleRating = (value) => {
    setRating(value)
  }

  return (
    <div>
      <h1>Rating: {rating}</h1>
      <StudentItem sendRating={handleRating} />
    </div>
  )
}

export default App




