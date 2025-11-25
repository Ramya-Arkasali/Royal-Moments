import React from 'react';
import {Link} from "react-router-dom";

const EventCard = (
    {img,date,title,description}
) => {
  return (
    <div>
        <Link to={`/event/${title}`}
         onClick={() =>
         {
            window.scroll(0,0);
         }
         }
         state={{img,date,title,description}}
        >
        <div className='p-4 shadow-lg transition-all duration-500 hover:shadow-xl bg-orange-100'>
        <div className='overflow-hidden'>
         <img src={img} alt=''
         className='mx-auto h-[250px] w-full object-cover transition-all duration-700 hover:skew-x-2 hover:scale-100'/>
        </div>
        <div className='flex justify-between pt-2 text-slate-600'>
            <p>{date}</p>
            
        </div>
        <div className='space-y-2 py-3'>
        <h1 className='line-clamp-1 font-bold'>{title}</h1>
        <p className='line-clamp-2'>{description}</p>
        </div>
        </div>
        </Link>
    </div>
  )
}

export default EventCard;