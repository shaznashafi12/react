import React from 'react'
import img4 from './images/shoes.jpg'
import img1 from './images/earbuds.webp'
import img2 from './images/watch.webp'
import img3 from './images/phone.jpg'
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";


const Mapping = () => {
    const data=[{img:img4,name:"shoe",disc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit",price:"$ 100.00",clr:"lightblue"},
        {img:img1,name:"Earphone",disc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit",price:"$ 40.00",clr:"violet"},
    {img:img2,name:"Watch",disc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit",price:"$ 70.00",clr:"lightgreen"},
{img:img3,name:"Phone",disc:"Lorem ipsum dolor sit amet,consectetur adipisicing elit",price:"$ 1000.00",clr:"orange"}]
  return (
    <div className='ll'>
        {data.map((item,index)=>
        <div className='card' key={index}>
     <img src={item.img} alt="" width={200} />
          <h1><b>{item.name}</b></h1>
          <h5>{item.disc}</h5>
          <h3>{item.price}</h3>
            <IoStar className='icon' />
            <IoStar className='icon'/>
            <IoStar className='icon'/>
            <IoStar className='icon' />
            <IoStarHalf className='icon1'/>
            <br></br><br></br>

          <input style={{backgroundColor:item.clr}} className='bu' type='button' value={"Buy Now"}></input>


    </div>
   )}
   </div>
  )
}

export default Mapping