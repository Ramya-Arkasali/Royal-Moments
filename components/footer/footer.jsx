import React from 'react'
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter,FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-orange-250  pt-20 md:px-16 lg:px-28 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      <div>
        <h2 className='text-lg font-bold mb-4'>About Us</h2>
        <p className='text-gray-800'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div>
        <h2 className='text-lg font-bold mb-4'>Quick Links</h2>
        <ul>
  <li>
    <Link to="/" className="hover:underline text-gray-900">Home</Link>
  </li>
  <li>
    <Link to="/event" className="hover:underline text-gray-900">Event</Link>
  </li>
  <li>
    <Link to="/about" className="hover:underline text-gray-900">About us</Link>
  </li>
  <li>
    <Link to="/contact" className="hover:underline text-gray-900">Contact us</Link>
  </li>
</ul>

      </div>
      <div>
        <h2 className='text-lg font-bold mb-4'>Follow us</h2>
        <ul className='flex space-x-4'>
          <li>
            {" "}
            <FaFacebookF className='text-blue-500' />{" "}
            <a href='' className='hover:underline text-gray-600'>Facebook</a>
            </li>
          <li>
            <FaTwitter className='text-sky-500'/>
            <a href='' className='hover:underline text-gray-600'>Twitter</a>
            </li>
          <li>
            <FaInstagram className='text-pink-500'/>
            <a href='' className='hover:underline text-gray-600'>Instagram</a>
            </li>
        </ul>
      </div>
      </div>
      <div className=' border-t border-gray-600 p-4 pt-6 text-gray-900 text-center mt-6'>
        <p>@ All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer