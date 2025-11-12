import React, { useState } from 'react'
import img from '../images/bgg1.jpeg'
import { IoHeart } from "react-icons/io5";

const Todo=()=>{
  const[data,setdata]=useState({list:""});
  const[subdata,setsubdata]=useState([]);
  const[editIndex,setEditIndex]=useState(null);

  const handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value});
  };

  const handlesubmit=(event)=>{
    event.preventDefault();


    if (editIndex!==null) {
      const updated=[...subdata];
      updated[editIndex]=data.list;
      setsubdata(updated);
      setEditIndex(null);
    } else {
      setsubdata([...subdata,data.list]);
    }

    setdata({list:""});
  };

  const handleDelete=(index)=> {
    const filtered=subdata.filter((Task,i)=>i!==index);
    setsubdata(filtered);
  };

  const handleEdit=(index)=>{
    setdata({list:subdata[index]});
    setEditIndex(index);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div
          className="h-auto min-h-[900px] w-[500px] ml-[900px] mt-[120px] bg-cover justify-center bg-center pt-20 rounded-2xl shadow-lg"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h1 className="text-center font-bold font-serif text-blue-950 text-3xl underline underline-offset-4 decoration-blue-950">
            TO DO LIST
          </h1>

        
          <div className="mt-[80px] flex justify-center items-center gap-2">
            <IoHeart className="text-3xl text-blue-950" />
            <input
              type="text"
              name="list"
              value={data.list}
              onChange={handlechange}
              placeholder="Add your task"
              className="text-start border-0 w-[300px] border-b-2 border-blue-950 focus:border-blue-950 focus:outline-none bg-transparent"
            />
          </div>

          <div className="mt-[50px] flex justify-center items-center gap-2">
            <button
              className="bg-blue-950 text-white w-[150px] h-[50px] font-serif rounded "
            >
              ADD
              {/* {editIndex!==null?"UPDATE":"ADD"} */}
            </button>
          </div>

          <div className="mt-10 px-10 pb-10">
            {subdata.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center  rounded-xl p-3 my-2 ">
                <p className="text-blue-950 font-serif">{item}</p>
                <div className="flex gap-3">
                  <button type="button" onClick={() => handleEdit(index)} className="bg-yellow-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Todo;
