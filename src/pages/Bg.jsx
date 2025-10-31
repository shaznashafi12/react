import React, { useState } from 'react'

const Bg = () => {
   const[clr,setclr]=useState('bg-red-400')

  let changeclr=()=>{
    setclr(prev=>prev=='bg-red-400'?'bg-green-300':'bg-red-400')
  }

  return (
    <div className={`min-h-screen flex flex-col  items-center justify-center ${clr}`}>
        <h1 className={'text-white text-4xl mb-4 '}>welcome</h1>
        <button  onClick={changeclr} className=' bg-white text-black w-[200px] h-[50px] '>click</button>
    </div>
  )
}

export default Bg