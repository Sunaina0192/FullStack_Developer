import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-900 justify-between '>
      <h2 className='text-2xl font-bold'>Sheriyans</h2>
      <div className='flex gap-10  p-10'>

        <Link className='text-3xl font-lg' to='/' >Home</Link>
        <Link className='text-3xl font-lg'  to='/about' >About</Link>
        <Link className='text-3xl font-lg'  to='/courses' >Courses</Link>
        <Link className='text-3xl font-lg' to='/product' >Product</Link>
        
      </div>
    </div>
  )
}

export default Navbar
