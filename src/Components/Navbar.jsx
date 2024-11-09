import React, { useState } from "react";
import { Link } from "react-router-dom";
import navItems from "../data/navItems";
import logo from "../images/logo.png";
import HeaderContactBar from "./HeaderContactBar";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#718baa] shadow-md">
      {/* Optional HeaderContactBar */}
      {/* <HeaderContactBar /> */}

      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 m-1">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-14 h-14" />
          </Link>
        </div>

        {/* Navbar Links for large screens */}
        <nav className="hidden lg:flex items-center ">
          {navItems.map((item, index) => (
            <div key={index} className="relative group p-2.5">
              <Link
                to={item.path}
                className="text-gray-700 group-hover:text-white font-medium">
                {item.title}
              </Link>

              {/* Dropdown for Subtopics */}
              {item.subTopics && (
                <div className="absolute left-0 hidden group-hover:block flex-col pt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg z-10">
                  {item.subTopics.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-200">
                      {subItem.subTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="lg:hidden text-green-900 font-serif font-bold " >
          Astrologer Nikhil Sharma
        </div>

        {/* Mobile Menu Button for small screens */}
        <button className="lg:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <MdOutlineCancel /> : <IoReorderThreeOutline />}
        </button>
      </div>

      {/* Mobile Menu for small screens */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item, index) => (
              <li key={index} className="w-full text-center">
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-orange-500 block py-2"
                  onClick={toggleMenu}>
                  {item.title}
                </Link>

                {/* Dropdown for Subtopics */}
                {item.subTopics && (
                  <ul className="bg-gray-100 rounded-md mt-1">
                    {item.subTopics.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1">
                        <Link
                          to={subItem.path}
                          className="text-sm text-gray-600 block py-1"
                          onClick={toggleMenu}>
                          {subItem.subTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;