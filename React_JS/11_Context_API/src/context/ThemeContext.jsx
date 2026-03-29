import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const ThmemeDataContext = createContext();
const ThemeContext = (props) => {
 
    const [theme, seTheme] = useState('dark');

  return (
    <div>
     <ThmemeDataContext.Provider value={[theme,seTheme]}>
        {props.children}
     </ThmemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
