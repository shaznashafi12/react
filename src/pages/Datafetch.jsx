import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Datafetch = () => {
    const [data,setdata]=useState([]);
    
    const fetchdata=async()=>{
        const response=await axios.get("https://jsonplaceholder.typicode.com/todos");
        setdata(response.data);
        console.log(data);
        
    }
    useEffect(()=>{
    fetchdata();
    },[])
    console.log(data);
    
  return (
    <div>
        {/* <button onClick={fetchdata}>click</button> */}
        <div className='bg-yellow-300 text-center '>{
            data.map((item)=>(
                <div ><h3 className='text-2xl'>{item.title}</h3></div>
           
            ))
        }
        </div>
    </div>
    
  )
}

export default Datafetch