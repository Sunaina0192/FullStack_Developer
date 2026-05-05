import React,{useContext} from 'react'
import {UserContext} from './UserContext'
const Dashboard = () => {
  const {user} = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (<>
        <p>Welcome, {user.name}!</p>
        <p> Your role as: {user.role}</p>
        </>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}

    </div>
  )
}

export default Dashboard
