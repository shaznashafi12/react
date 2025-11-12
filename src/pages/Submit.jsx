import React, { useState } from 'react'

const Submit = () => {
    const[data,setdata]=useState(
        {
            name:"",
            age:""
        }
    )
    const[subdata,setsubdata]=useState([])


    const handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }

    const handlesubmit=(event)=>
    {
        event.preventDefault()
      setsubdata([...subdata,data])
      setdata({
        name:"",
        age:""
      })
        console.log(data);
        
    }
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
            <div className=' w-[450px] rounded-lg h-[250px] mt-[100px] ml-[500px] bg-slate-400'>
            <label className='text-gray-700' htmlFor=''>name : </label>
            <input className='w-[300px] h-10 bg-gray-300 mt-10 rounded' onChange={handlechange} type='text' name='name' value={data.name}/> 
             <br></br>            
              <label className='text-gray-700' htmlFor=''>age : </label>
            <input className=' mt-5 w-[300px] h-10  bg-gray-300  rounded mr-[-10px]' onChange={handlechange} type='text' name='age' value={data.age}/>
            <br></br>
            <button className='ml-7 bg-slate-700 rounded text-white mt-4 w-[100px] h-10' >submit</button>
            </div>
        </form>
    </div>
  )
}

export default Submit