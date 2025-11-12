import React, { useContext } from 'react'
import Themecontext from './Themecontext'

const Bgchng = () => {
    const value=useContext(Themecontext)
  return (
    <div className={value.theme==='bg-red-400'?'bg-red-400':'bg-black text-white'} style={{height:"1000px"}} >
        <div>hello</div>
        <button onClick={value.toggletheme}>click</button>
    </div>
  )
}

export default Bgchng