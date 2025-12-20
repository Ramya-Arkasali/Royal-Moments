// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='pt-30 pb-10'>
//     <div className='max-w-md w-full h-500px mx-auto p-6 bg-orange-100 rounded-t-2xl rounded-lg shadow-md '>
//       <h2 className='text-3xl text-center text-pink font-bold mb-6'>Contact Us</h2>
//       <form>
//         <div className='mb-4'>
//            <label className='block text-gray-900 text-sm font-semibold mb-2' htmlFor=''>Your Name</label> 
//            <input placeholder='John Doe' className='w-full px-3 py-2 border rounded-lg bg-orange-100 focus:border-orange-200' required type='text'/> 
//            </div>
//         <div className='mb-4'> 
//           <label className='block text-gray-900 text-sm font-semibold mb-2' htmlFor=''>Your Email</label>
//           <input placeholder='John@gmail.com' className='w-full px-3 py-2 border rounded-lg bg-orange-100 focus:border-orange-200' required type='mail'/> 
//           </div>
//         <div className='mb-4'> 
//           <label className='block text-gray-900 text-sm font-semibold mb-2' htmlFor=''>Your Message </label> 
//           <textarea rows='4'  placeholder='Type your message here...' className='w-full px-3 py-2 border rounded-lg bg-orange-100 focus:border-orange-200' required type='text'/> 
//         </div>
//         <div className='flex justify-center'>
//           <button type='submit' className='bg-amber-600 text-gray-700 font-semibold px-4 py-2 rounded-lg hover: orange-300 focus:outline-white'>Send Message</button>
//         </div>
//       </form>

//       </div>
//       </div>
//   )
// }

// export default Contact
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="pt-20 pb-10 px-4">
      <div className="max-w-md mx-auto p-6 bg-orange-100 rounded-2xl shadow-md">
        <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              required
              className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:border-orange-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              placeholder="john@gmail.com"
              required
              className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:border-orange-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-semibold mb-2">
              Your Message
            </label>
            <textarea
              rows="4"
              required
              placeholder="Type your message here..."
              className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:border-orange-400"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-amber-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-amber-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
