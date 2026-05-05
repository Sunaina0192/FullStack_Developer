import React,{useState} from 'react'
import { UserContext } from './UserContext';

const UserProvider = ({children}) => {
     const [user,setUser]=useState(null);
     console.log("userProvider is rendered | user: ", user);

    function login(){
        console.log("Login function is called");
        setUser({
            name:"Sunaina",
            role: "Developer",
        });
    }

    function logout(){
        console.log("Logout function is called");
        setUser(null);
        
    };

    const value = {user, login, logout};
    console.log("Checking value in userProvider: ", value);
 

  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
