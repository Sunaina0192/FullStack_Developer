import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {
    const navigate = useNavigate();
  return (
        <div className='flex gap-4 px-8 py-4 bg-cyan-800'>
      <button onClick={()=>{
        navigate('/');
      }} className='bg-amber-400 px-5 py-2 rounded cursor-pointer active:scale-95'>Return to Home Page</button>

          <button onClick={()=>{
        navigate(-1);
      }} className='bg-amber-400 px-5 py-2 rounded cursor-pointer active:scale-95'>Back</button>

       <button onClick={()=>{
        navigate(+1);
      }} className='bg-amber-400 px-5 py-2 rounded cursor-pointer active:scale-95'>Next</button>
</div>
  )
}

export default Navbar2
