import React from 'react';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const navbarLinks = [
    { name: "Home", link: "/Home" },
    { name: "Event", link: "/Event" },
    { name: "About Us", link: "/AboutUs" },
    { name: "Contact Us", link: "/ContactUs" },
];

const ResponsiveMenu = ({ ShowMenu, setShowMenu }) => {
    return (
        <div
            className={`${
                ShowMenu ? "left-0" : "left-[100]"
            } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between 
            bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 
            text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
        >
            <div className="Navbar_card">
                <div className="flex flex-col items-start">
                    
                    {/* User Icon */}
                    <FaUserCircle size={50} className="text-gray-500" />

                    <div className="text-gray-500 mt-2">
                        <h1>Hello User</h1>
                    </div>

                    {/* Menu Links */}
                    <div className="text-black mt-12">
                        <ul className="space-y-4 text-xl">
                            {navbarLinks.map(({ name, link }) => (
                                <li key={name}>
                                    <Link
                                        to={link}
                                        onClick={() => setShowMenu(false)}
                                        className="mb-5 inline-block"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
