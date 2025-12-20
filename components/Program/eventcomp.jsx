import React from 'react'
import EventCard from "../Program/eventcard";
//import images
const EventData = [
    {
    img:`/w1.jpg`,
     date:`25/12/2025`,
     title:`ENGAGEMENT PARTY`,
    description:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non possimus? Cum voluptatum 
    nulla explicabo earum vitae necessitatibus adipisci ut atque dicta modi. Deserunt minima nesciunt 
    similique harum eum ducimus voluptas voluptates vel vitae a recusandae reiciendis unde quo quisquam sint
     totam ipsum, praesentium esse accusamus in illo. Nemo debitis similique aliquid corporis rerum molestias
      eius officiis veniam? Natus tempora inventore labore voluptate quasi dignissimos facilis praesentium 
      tenetur, assumenda quo ratione perspiciatis totam fuga rerum, repellendus eligendi soluta et corrupti!`,
    },
    {
        img:`/w2.jpg`,
     date:`2/1/2026`,
     title:`RECEPTION PARTY`,
      description:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non possimus? Cum voluptatum 
    nulla explicabo earum vitae necessitatibus adipisci ut atque dicta modi. Deserunt minima nesciunt 
    similique harum eum ducimus voluptas voluptates vel vitae a recusandae reiciendis unde quo quisquam sint
     totam ipsum, praesentium esse accusamus in illo. Nemo debitis similique aliquid corporis rerum molestias
      eius officiis veniam? Natus tempora inventore labore voluptate quasi dignissimos facilis praesentium 
      tenetur, assumenda quo ratione perspiciatis totam fuga rerum, repellendus eligendi soluta et corrupti!`,
    },
    {
        img:`/w1.jpg`,
     date:`25/2/2026`,
     title:`WEDDING PARTY`,
      description:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non possimus? Cum voluptatum 
    nulla explicabo earum vitae necessitatibus adipisci ut atque dicta modi. Deserunt minima nesciunt 
    similique harum eum ducimus voluptas voluptates vel vitae a recusandae reiciendis unde quo quisquam sint
     totam ipsum, praesentium esse accusamus in illo. Nemo debitis similique aliquid corporis rerum molestias
      eius officiis veniam? Natus tempora inventore labore voluptate quasi dignissimos facilis praesentium 
      tenetur, assumenda quo ratione perspiciatis totam fuga rerum, repellendus eligendi soluta et corrupti!`,
    },
    {
      img:`/f1.jpg`,
     date:`25/12/2025`,
     title:`FAMILY PARTY`,
      description:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non possimus? Cum voluptatum 
    nulla explicabo earum vitae necessitatibus adipisci ut atque dicta modi. Deserunt minima nesciunt 
    similique harum eum ducimus voluptas voluptates vel vitae a recusandae reiciendis unde quo quisquam sint
     totam ipsum, praesentium esse accusamus in illo. Nemo debitis similique aliquid corporis rerum molestias
      eius officiis veniam? Natus tempora inventore labore voluptate quasi dignissimos facilis praesentium 
      tenetur, assumenda quo ratione perspiciatis totam fuga rerum, repellendus eligendi soluta et corrupti!`,
    },
    {
        img:`/c3.jpg`,
     date:`23/3/2026`,
     title:`CORPORATE PARTY`,
      description:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non possimus? Cum voluptatum 
    nulla explicabo earum vitae necessitatibus adipisci ut atque dicta modi. Deserunt minima nesciunt 
    similique harum eum ducimus voluptas voluptates vel vitae a recusandae reiciendis unde quo quisquam sint
     totam ipsum, praesentium esse accusamus in illo. Nemo debitis similique aliquid corporis rerum molestias
      eius officiis veniam? Natus tempora inventore labore voluptate quasi dignissimos facilis praesentium 
      tenetur, assumenda quo ratione perspiciatis totam fuga rerum, repellendus eligendi soluta et corrupti!`,
    },
    {
        img:`/home1.jpg`,
     date:`23/3/2026`,
     title:`CORPORATE FUNCTION`,
      description:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non possimus? Cum voluptatum 
    nulla explicabo earum vitae necessitatibus adipisci ut atque dicta modi. Deserunt minima nesciunt 
    similique harum eum ducimus voluptas voluptates vel vitae a recusandae reiciendis unde quo quisquam sint
     totam ipsum, praesentium esse accusamus in illo. Nemo debitis similique aliquid corporis rerum molestias
      eius officiis veniam? Natus tempora inventore labore voluptate quasi dignissimos facilis praesentium 
      tenetur, assumenda quo ratione perspiciatis totam fuga rerum, repellendus eligendi soluta et corrupti!`,
    },
    
]
const EventComp = () => {
  return (
    <div >
        <div data-aos='fade-up' className='container'>
            <h1 className='my-8 border-l-8 border-amber-700 py-2 pl-2 text-3xl font-bold'>Events</h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                {EventData.map((item) => (
  <EventCard key={item.title} {...item} />
))}

            </div>
        </div>
    </div>
  )
}

export default EventComp;