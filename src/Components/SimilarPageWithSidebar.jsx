import React from "react";
import Navbar from "../Components/Navbar";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import YtQuery from "./YtQuery.jsx";
import image1 from "../../public/images/bg1.webp"
const SimilarPageWithSidebar = ({ Content }) => {
  return (
    <>
      <Navbar />
      <div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Sidebar */}

        {/* Main Content */}
        <section className="lg:col-span-3 space-y-6">
          {/* Heading and Introduction */}
          <header className="bg-gradient-to-r from-green-700 to-green-500 text-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-2">{Content[0].heading}</h1>
            <div className="grid gap-3 text-sm">
              {Content[0].para.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </header>

          {/* Video Query Section */}
          <div className="flex items-start justify-between mt-6 animate-slideInRight">
            <YtQuery />
          </div>

          {/* Mid Content Box */}
          <div
            className="bg-cover bg-center p-6 rounded-lg text-white text-center relative shadow-lg"
            style={{
              backgroundImage: `url(${image1})`, // Use your image URL here
            }}
          >
            {/* Background Overlay for contrast */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

            <div className="relative z-10 space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
                Swift and Effective Solutions Through <strong>Healing & Meditation</strong> by{" "}
                <i className="text-yellow-300">Astrologer Nikhil Sharma</i>
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                {/* Phone Link */}
                <a
                  href="tel:+91-95091-68369"
                  className="text-lg sm:text-xl text-blue-300 hover:text-blue-500 transition-colors duration-300 hover:underline font-semibold"
                >
                  +91-95091-68369
                </a>

                {/* Email Link */}
                <a
                  href="mailto:info@astrologerNikhilSharma.com"
                  className="text-lg sm:text-xl text-blue-300 hover:text-blue-500 transition-colors duration-300 hover:underline font-semibold"
                >
                  info@AstrologerNikhilSharma.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div
            className="bg-cover bg-center p-6 rounded-lg text-white relative shadow-lg"
            style={{
              backgroundImage: `url(${image1})`, // Use your image URL here
            }}
          >
            {/* Background Overlay for Contrast */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

            <div className="relative z-10 space-y-4">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-yellow-300">
                {Content[0].heading2}
              </h2>

              {/* Paragraphs and List */}
              <div className="grid gap-4 mt-4 text-gray-300">
                {Content[0].para2.map((paragraph, index) => (
                  <p key={index} className="text-lg sm:text-xl leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Unordered List */}
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  {Content[0].ul2.map((item, index) => (
                    <li key={index} className="text-lg sm:text-xl hover:text-yellow-300 transition-colors duration-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


          {/* Final Highlight Section */}
          <div className="bg-yellow-200 p-4 rounded shadow-lg mt-6 text-center">
            <p>
              Get reliable astrological solutions by contacting{" "}
              <strong>
                <a href="tel:+91-95091-68369" className="text-blue-500 hover:underline">+91-95091-68369</a>
              </strong>
              , or by emailing at{" "}
              <a href="mailto:info@astrologerNikhilSharma.com" className="text-blue-500 hover:underline">
                info@AstrologerNikhilSharma.com
              </a>.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SimilarPageWithSidebar;