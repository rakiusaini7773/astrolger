import React from "react";
import Navbar from "../Components/Navbar";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import YtQuery from "./YtQuery.jsx";

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
          <div className="bg-green-700 p-4 text-white rounded-lg text-center">
            <p>
              Swift And Effective Solutions Through <strong>Healing & Meditation</strong> by{" "}
              <i>Astrologer Nikhil Sharma</i>{" "}
              <span>
                <a href="tel:+91-95091-68369" className="text-blue-300 hover:underline">+91-95091-68369</a>
              </span>{" "}
              <a href="mailto:info@astrologerNikhilSharma.com" className="text-blue-300 hover:underline">
                info@AstrologerNikhilSharma.com
              </a>
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-2xl font-bold">{Content[0].heading2}</h2>
            <div className="grid gap-2 mt-3 text-gray-800">
              {Content[0].para2.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <ul className="list-disc list-inside text-gray-800 mt-3 space-y-1">
                {Content[0].ul2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
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