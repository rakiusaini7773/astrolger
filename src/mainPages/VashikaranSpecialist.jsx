import React from "react";
import Navbar from "../Components/Navbar";
import YtQuery from "../Components/YtQuery";
import Footer from "../Components/Footer.jsx";
import PlacesNames from "../Data/VashikaranSpecialist/PlacesNames.js";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import awardCeremony from "../images/gettingAward.jpg"
import image1 from "../../public/images/bg4.webp"

const VashikaranSpecialist = () => {
  // State to track the active list item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle the click on a list item
  const handleItemClick = (index) => {
    // Toggle visibility of the paragraph
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleSlug = () => {

    const { slug } = useParams()
  }
  return (
    <>
      <Navbar />
      <div className="contentSection animate-fadeIn">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center bg-no-repeat text-black animate-fadeIn py-16 lg:py-24 px-6 lg:px-8"
          style={{ backgroundImage: `url(${image1})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 max-w-7xl mx-auto text-center lg:text-left">
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white border-b-4 border-indigo-400 pb-3 mb-8 animate-slideInUp">
              Vashikaran Specialist
            </h1>
            <p className="text-lg leading-relaxed mb-6 animate-fadeInLeft">
              By virtue of its nature and effect, vashikaran is suitable for
              dealing with problems relating to nearly all spheres of life. The
              problems which can readily be solved or eradicated forever are
              outlined below. As mentioned, only a few elements differ in solving
              diverse issues with vashikaran therapy, offering an understanding of{" "}
              <strong className="text-white transition-transform transform hover:scale-105 duration-300">
                "how can vashikaran solve your problems?"
              </strong>
              , making you free from specified troubles.
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="relative bg-cover bg-center bg-no-repeat text-white py-12 lg:py-16 px-6 lg:px-8"
          style={{ backgroundImage: `url(${image1})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>

          <div className="relative z-10 max-w-7xl mx-auto lg:flex lg:space-x-8">
            <div className="flex-1 text-center lg:text-left bg-white/10 p-8 rounded-lg shadow-md animate-fadeInUp">
              <h2 className="text-3xl font-bold mb-6 tracking-tight">How Can Vashikaran Solve Your Life Problems?</h2>
              <p className="text-lg leading-relaxed mb-4">
                Vashikaran is an ancient science rooted in Indian culture. With over 20 years of experience, we assist with issues ranging from relationships to business challenges.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">What is Vashikaran?</h2>
              <p className="text-lg leading-relaxed mb-6">
                Trusted for centuries, Vashikaran is known for its impact on personal and professional life challenges. Our specialist provides solutions for each unique issue, utilizing sacred herbs and yantras.
              </p>
              <span className="block text-lg mt-6">Contact: <strong className="text-indigo-300">+91-95091-68369</strong></span>
            </div>

            {/* Services List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6 mt-6 lg:mt-0">
              {[
                "Vashikaran for Husband",
                "Vashikaran to Get Boyfriend Back",
                "Vashikaran for Wife",
                "Vashikaran to Get Girlfriend Back",
                "Vashikaran to Get Ex Back",
                "Vashikaran for Inter-caste Marriage",
                "Love Problem Solutions"
              ].map((service, index) => (
                <div key={index}
                  className="bg-white/10 p-4 rounded-lg flex items-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                  <i className="fa fa-arrow-right text-indigo-400 mr-3 text-xl"></i>
                  <span className="text-lg font-semibold text-indigo-100">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div
          className="text-center mt-12 relative py-12 px-6 lg:py-16 lg:px-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image1})` }} // Replace backgroundImage with the actual variable or URL
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Best Love Astrologer in India - Pandit Nikhil Sharma
            </h2>
            <p className="mb-6 text-white leading-relaxed text-lg">
              Astrology is a science of the stars, affecting various aspects of life...
            </p>

            <ul className="pl-5 mb-8 space-y-3 text-white text-md md:text-lg lg:text-xl">
              {[
                "Lost Love",
                "Breakup Problems",
                "Misunderstandings",
                "Trust Issues",
                "Get Ex Back",
                "Convincing GF/BF for Marriage",
                "Compatibility Issues"
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative hover:text-indigo-300 hover:font-semibold transition-all duration-300 ease-in-out group"
                >
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                    {item}
                  </span>
                  <div className="absolute top-1/2 right-full transform -translate-y-1/2 mr-2 hidden group-hover:block w-2 h-2 bg-indigo-300 rounded-full"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Locations Section */}
        <div className="bg-red-100 p-4 border-t-4 border-red-400 rounded-md mt-8">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            {PlacesNames.map((item) => (
              <li key={item.pathName}>
                <Link to={`/Vashikaran-Specialist/${item.pathName}`}
                  className="text-blue-600 underline hover:text-blue-800">
                  {item.placeTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>


      <Footer />
    </>
  );
};

export default VashikaranSpecialist;