import React, { useState } from 'react'
import Themecontext from './Themecontext'

const Themeprovider = ({children}) => {
    const[theme,settheme]=useState('bg-red-400')

    let toggletheme=()=>{
        settheme(theme==='bg-red-400'?'bg-black':'bg-red-400')
    }
  return (
    <div>
        <Themecontext.Provider value={{theme,toggletheme}} >
{children}
        </Themecontext.Provider>

    </div>
  )
}

export default Themeprovider