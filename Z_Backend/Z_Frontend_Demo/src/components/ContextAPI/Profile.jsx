import React,{useContext} from 'react'
import {UserContext} from './UserContext'
const Profile = () => {
  const {user, login, logout} = useContext(UserContext);

  return (
    <div>
      <h1>PROFILE PAGE</h1>
      {user ? (<>
       <p>My Profile name is: {user.name}</p>
       <p>and Role i played as: {user.role}</p>
       <button onClick={logout}>Logout</button>
      </>):(<>
       <p>No user is existing right now</p>
        <button onClick={login}>Login</button>
      </>)}
      
    </div>
  )
}

export default Profile
