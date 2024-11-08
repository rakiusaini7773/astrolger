import React, { useState } from "react";
import { Link } from "react-router-dom";
import navItems from "../data/navItems";
import logo from "../images/logo.png";
import HeaderContactBar from "./HeaderContactBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-200 shadow-md">
      {/* Optional HeaderContactBar */}
      {/* <HeaderContactBar /> */}

      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-24 h-24" />
          </Link>
        </div>

        {/* Navbar Links for large screens */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                to={item.path}
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                {item.title}
              </Link>

              {/* Dropdown for Subtopics */}
              {item.subTopics && (
                <div className="absolute left-0 hidden pt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg group-hover:block z-10">
                  {item.subTopics.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-600 group-hover:bg-gray-100"
                    >
                      {subItem.subTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button for small screens */}
        <button
          className="lg:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close" : "Menu"}
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
                  onClick={toggleMenu}
                >
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
                          onClick={toggleMenu}
                        >
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
