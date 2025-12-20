import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "underline underline-offset-8 text-gray-700"
      : "text-black";

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between bg-stone-50 py-3">
        <img src="/logo.png" alt="logo" className="w-40 h-20 px-4" />

        <ul className="flex items-center space-x-20 p-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/event" className={navLinkClass}>Events</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between bg-stone-50 px-4 py-3">
        <img src="/logo.png" alt="logo" className="w-32" />

        <div className="text-3xl cursor-pointer">
          {showMenu ? (
            <HiMenuAlt1 onClick={() => setShowMenu(false)} />
          ) : (
            <HiMenuAlt3 onClick={() => setShowMenu(true)} />
          )}
        </div>
      </div>

      {/* Responsive Menu */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
