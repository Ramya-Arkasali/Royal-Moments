import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
    const settings = {
     dots:true,
     infinite:true,
     speed:500,
     slidesToShow:3,
     slidesToScroll:3,

         responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };
    
  return (
    <div className='w-3/4 m-auto  '>
        <h1 className='pt-20 font-bold text-3xl'>Our Upcoming Events</h1>
    <div className='mt-10'>
        <Slider {...settings}>
      {data.map((d)=>
    (
        <div className='bg-orange-100 h-[400px] text-black rounded-xl'>
            
            <div className='h-60 flex justify-center items-center rounded-t-xl p-10'>
                
                <img src={d.img} alt='' className='h-44 w-44 rounded-xl'/>
            </div>

             <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p>{d.des}</p>
                <button className='bg-amber-600 text-lg p-2 py-1 rounded-t-xl'>Read More</button>
            </div>
        </div>
    )
    )}
    </Slider>
    </div>
    </div>
  );
};

const data =[
    {
        name :`WEDDING`,
        img :`/w2.jpg`,
        des : `A royal wedding decoration`,
    },
    {
        name :`FAMILY-GET TOGETHER`,
        img :`/f1.jpg`,
        des : `Setup For Family time`,
    },
    {
        name :`RECEPTION PARTY`,
        img :`/w1.jpg`,
        des : `A Royal Decoration for Recepption Party `,
    },
    {
        name :`CORPORATE PARTY`,
        img :`/c3.jpg`,
        des : `A Decoration for Corporate Parties  `,
    },

]

export default Cards