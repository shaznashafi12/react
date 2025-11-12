import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Fetdata = () => {
  const [data,setdata]=useState([]);
    
    const fetchdata=async()=>{
        const response=await axios.get("https://jsonplaceholder.typicode.com/albums");
        setdata(response.data);
        console.log(data);
        
    }
    useEffect(()=>{
    fetchdata();
    },[])
    console.log(data);
    
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center py-10">
      <div className="bg-black border shadow-lg rounded-xl p-6 w-[90%] sm:w-[70%] md:w-[50%]">
        <ul className="space-y-4 text-left">
          {data.map((item) => (
            <li key={item.id}className="bg-indigo-950 text-white rounded-lg p-3 shadow hover:bg-indigo-800 transition">

               <h1>{item.id}</h1>
                <h1>{item.title}</h1>
                 <h1>{item.userId}</h1>



            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Fetdata