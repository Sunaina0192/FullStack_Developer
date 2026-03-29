// =========================task 4================

import React from 'react'

const AddStudent = (props) => {

   const addHandler =()=>{
      const Student={
        name:'Sunaina',
        rollNo:11,
        class:'BTech Cse',
      }
      props.onAddStudent(Student)
    }
  return (
  <div>
      <button onClick={addHandler}>Add Student</button>

    </div>
  )
}

export default AddStudent
