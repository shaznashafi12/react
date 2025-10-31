import React from 'react'
import { Link } from 'react-router-dom'

const Tail = () => {
  return (
    <div className=' gap-72 justify-center'>
        <h1 className='bg-pink-500 my-10 h-[500px] w-[500px] text-5xl text-white py-52 rounded-lg'>WELCOME</h1>
        <h1 className='text-6xl bg-green-500 font-mono my-10 h-[500px] w-[500px] py-52 rounded-lg' >home</h1>
<Link to='/ff'><button>click</button></Link >
    </div>
  )
}

export default Tail