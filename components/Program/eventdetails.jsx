import React from 'react'
import { useLocation } from "react-router-dom"
import EventComp from "../Program/eventcomp";

const EventDetails = () => {
    const location = useLocation();
    console.log(location,"useLocation");
    const {img,date,title,description} = location.state;
    
    return (
    <div className='min-h-[750px] pt-20'>
     <div className='h-[450px] overflow-hidden'>
       <img src={img} alt='' className='mx-auto h-[500px] w-100px object-cover transition duration-700 hover:scale-110 rounded-3xl'/>
     </div>
     <div className='container pb-20 p-18'>
        <h1 className='text-2xl font-semibold mb-10  text-center pt-10'>{title}</h1>
        <h1 className='pt-1 text-xl font-semibold pb-2'>Date:{date}</h1>
        <h1 className=''>{description}</h1>
     </div>
    </div>
  )
}

export default EventDetails