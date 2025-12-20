import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const navbarLinks = [
  { name: "Home", link: "/" },
  { name: "Events", link: "/event" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-full"
      } fixed top-0 bottom-0 z-20 h-screen w-[75%] 
      bg-white px-8 pt-16 pb-6 text-black 
      transition-all duration-300 md:hidden rounded-r-xl shadow-lg`}
    >
      <FaUserCircle size={50} className="text-gray-500" />
      <h1 className="mt-2 text-gray-500">Hello User</h1>

      <ul className="mt-12 space-y-4 text-xl">
        {navbarLinks.map(({ name, link }) => (
          <li key={name}>
            <Link
              to={link}
              onClick={() => setShowMenu(false)}
              className="block"
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

