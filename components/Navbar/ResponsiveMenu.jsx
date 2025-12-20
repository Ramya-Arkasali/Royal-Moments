import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const navbarLinks = [
  { name: "Home", link: "/home" },
  { name: "Events", link: "/event" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const ResponsiveMenu = ({ ShowMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        ShowMenu ? "left-0" : "-left-full"
      } fixed top-0 z-50 h-screen w-[75%]
      bg-orange-50 text-black
      px-6 pt-16 transition-all duration-300
      md:hidden shadow-lg`}
    >
      {/* User */}
      <div className="flex flex-col items-start gap-4 mb-10">
        <FaUserCircle size={48} className="text-gray-600" />
        <p className="text-gray-600 text-sm">Hello User</p>
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-6 text-lg font-semibold">
        {navbarLinks.map(({ name, link }) => (
          <li key={name}>
            <Link
              to={link}
              onClick={() => setShowMenu(false)}
              className="block hover:text-amber-600 transition"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
