// import React from 'react';


// const Hero = () => {
//   return (
//     <>
//     <section className="min-[400px] item-center  p-20 bg-cover bg-center bg-no-repeat flex items-center"
//         style={{ backgroundImage: "url('/pastel.jpg')" }}>
//         <div className='container  min-h-[450px] '>
//         <div className='flex flex-col justify-center items-center text-center  space-y-4 mt-50' >
//             <h1 className='text-amber-600 text-4xl lg:text-7xl font-bold leading-relaxed xl:leading-normal'>Live your Dreams</h1>
//             <p className='text-orange-400 text-3xl xl:max-w-[500px] leading-relaxed '>Turn your dreams into reality with Royal Moments</p>
        
//         <div className=' justify-center gap-5 md:justify-start'>
//             {/* <button className='bg-orange-500 text-white flex items-center gap-2  rounded-2xl px-5 py-1 '> */}
//             <button className="bg-rose-400 text-white  rounded-xl text-sm px-4 py-1.5 shadow-md hover:bg-rose-500 transition">
  
//              Check Our Events
//             </button>
//             <div className='flex justify-center items-center'>
//               {/* /  <img src='/home1.jpg' alt='' className='w-350px md:w-[550px] xl:w-[700px]' /> */}
//             </div>
//         </div>
//         </div>
//         </div>
//     </section>
//     </>
//   )
// }

// export default Hero;
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="flex items-center bg-cover bg-center bg-no-repeat px-6 py-20"
      style={{ backgroundImage: "url('/pastel.jpg')" }}
    >
      <div className="container min-h-[450px] flex flex-col justify-center items-center text-center space-y-6 mt-50">
        <h1 className="text-amber-600 text-4xl lg:text-7xl font-bold">
          Live your Dreams
        </h1>

        <p className="text-orange-400 text-xl lg:text-3xl max-w-xl">
          Turn your dreams into reality with Royal Moments
        </p>

        <button
          onClick={() => navigate("/event")}
          className="bg-rose-400 text-white rounded-xl px-6 py-2 shadow-md hover:bg-rose-500 transition"
        >
          Check Our Events
        </button>
      </div>
    </section>
  );
};

export default Hero;
