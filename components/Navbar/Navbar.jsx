import React from 'react'
import { useState } from 'react';
import {Link,NavLink} from "react-router-dom";
import {HiMenuAlt3,HiMenuAlt1} from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';


const Navbar = () => {
    const [menu,setMenu] = useState("Home");
    const [showMenu, setShowMenu] = useState(false); 
  return (
    <>
    <div className="hidden md:flex navbar py-3 sm:py-0  items-center justify-between bg-stone-50">
        <img src="/logo.png" alt="logo" className='logo w-40 h-20 px-4' />
<ul className="navbar-contents flex justify-between items-center p-8 space-x-20 cursor-pointer">
  <NavLink to="/home" onClick={() => setMenu("Home")} className={menu === "Home" ? "underline underline-offset-8 text-gray-700" : "text-black"}>
    Home
  </NavLink>

  <NavLink to="/event" onClick={() => setMenu("Events")} className={menu === "Events" ? "underline underline-offset-8 text-gray-700" : "text-black"}>
    Events
  </NavLink>

  <NavLink to="/about" onClick={() => setMenu("About")} className={menu === "About" ? "underline underline-offset-8 text-gray-700" : "text-black"}>
    About
  </NavLink>

  <NavLink to="/contact" onClick={() => setMenu("Contact")} className={menu === "Contact" ? "underline underline-offset-8 text-gray-700" : "text-black"}>
    Contact
  </NavLink>
</ul>

   </div>
     <div className="md:hidden flex items-center justify-between bg-stone-50 px-4 py-3">
        <img src="/logo.png" alt="logo" className="w-32" />

        <div className="text-3xl">
          {showMenu ? (
            <HiMenuAlt1 onClick={() => setShowMenu(false)} className="cursor-pointer" />
          ) : (
            <HiMenuAlt3 onClick={() => setShowMenu(true)} className="cursor-pointer" />
          )}
        </div>
      </div>
    
       <ResponsiveMenu setShowMenu={setShowMenu} ShowMenu={showMenu} />
   
    
    

    </>
  );
};
    export default Navbar;
  


   
