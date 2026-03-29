import React from 'react'
import Navbar2 from './Navbar2'
import { useContext } from 'react'
import { ThmemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
const[theme] = useContext(ThmemeDataContext);
  return (
    <div className={theme}>
      <h2>Sunaina</h2>
      <Navbar2 />
    </div>
  )
}

export default Navbar
