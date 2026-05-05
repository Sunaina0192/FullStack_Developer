import React from 'react'
// import BackendServerCatch from './components/BackendServerCatch'
// import Get from './components/Get'
// import Post from './components/Post'
// import Put from './components/Put'
// import Delete from './components/Delete'
// import Patch from './components/Patch'
import Navbar from './components/ContextAPI/Navbar'
import Profile from './components/ContextAPI/Profile'
import Dashboard from './components/ContextAPI/Dashboard'


const App = () => {
  return (
    <div>
      {/* <BackendServerCatch/> */}
      {/* <Get /> */}
      {/* <Post/> */}
      {/* <Put/> */}
      {/* <Delete/> */}
      {/* <Patch/> */}
    <Navbar/>
    <Profile/>
    <Dashboard/>



    </div>
  )
}

export default App
