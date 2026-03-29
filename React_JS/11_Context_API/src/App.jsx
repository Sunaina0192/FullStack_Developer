// Context Api ka matlb hai data ko globally share krna centeralized rkh dena data ko taki har koi access kr paye data ko... 
// yeh props drilling ko handle karta hai...
// Need => 1.context create (mujhe sab logo ko khana batna tha maine ek system baniya jisee ki sab ko log easyle khana kha sakee)
//         2.Provider       (sab ko khana provide toh krdiya per kisi ne khaiya ni )
//         3.useContext     ( iska use krke sab log khana kha payenge)

import React from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'



const App = () => {

  
  return (
    <div>
      <Navbar/>
      <Button/>
    </div>
  )
}

export default App
