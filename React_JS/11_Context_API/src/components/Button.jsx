import React from 'react'
import { useContext } from 'react'
import { ThmemeDataContext } from '../context/ThemeContext'

const Button = () => {

   const [theme, setTheme]=useContext(ThmemeDataContext);
    const changeTheme =()=>{
          setTheme('dark');
    }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
