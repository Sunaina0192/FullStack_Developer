import React,{useContext} from 'react'
import {UserContext} from './UserContext'

const Navbar = () => {
const {user} = useContext(UserContext);

  return (
    <div>
      <h1> Welcome to Navbar of Context Api</h1>
      {user ? (
        <>
        <p>My name is: {user.name}</p>
      </>
    ):(<>
     <p>No user is existing</p>
    </>)}
      
    </div>
  )
}

export default Navbar
