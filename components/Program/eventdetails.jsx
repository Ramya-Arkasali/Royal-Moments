// import React from 'react'
// import { useLocation } from "react-router-dom"
// import EventComp from "../Program/eventcomp";

// const EventDetails = () => {
//     const location = useLocation();
//     console.log(location,"useLocation");
//     const {img,date,title,description} = location.state;
    
//     return (
//     <div className='min-h-[750px] pt-20'>
//      <div className='h-[450px] overflow-hidden'>
//        <img src={img} alt='' className='mx-auto h-[500px] w-100px object-cover transition duration-700 hover:scale-110 rounded-3xl'/>
//      </div>
//      <div className='container pb-20 p-18'>
//         <h1 className='text-2xl font-semibold mb-10  text-center pt-10'>{title}</h1>
//         <h1 className='pt-1 text-xl font-semibold pb-2'>Date:{date}</h1>
//         <h1 className=''>{description}</h1>
//      </div>
     
//     </div>
//   )
// }

// export default EventDetails;

import { useLocation } from "react-router-dom";
import { useState } from "react";
import BookingForm from "../Program/BookingForm.jsx"

const EventDetails = () => {
  const location = useLocation();
  const [openForm, setOpenForm] = useState(false);

  if (!location.state) {
    return <div className="pt-20 text-center">Event not found</div>;
  }

  const { img, date, title, description } = location.state;

  return (
    <>
      <div className="min-h-[750px] pt-20">
        <div className="h-[450px] overflow-hidden">
          <img
            src={img}
            alt={title}
            className="mx-auto h-[450px] w-full object-cover rounded-3xl"
          />
        </div>

        <div className="container pb-20 px-8">
          <h1 className="text-2xl font-semibold text-center pt-10">
            {title}
          </h1>

          <p className="text-center text-gray-600 py-2">
            Event Date: {date}
          </p>

          <p className="mt-6">{description}</p>

          {/* Book Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => setOpenForm(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full transition"
            >
              Book My Event
            </button>
          </div>
        </div>
      </div>

      {openForm && (
        <BookingForm
          eventTitle={title}
          setOpenForm={setOpenForm}
        />
      )}
    </>
  );
};

export default EventDetails;
