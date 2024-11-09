import React from "react";
import Navbar from "../Components/Navbar";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import astrologyLinks from "../Data/astrologySpecialist/astrologyLinks.js";
import astrologyCountry from "../Data/astrologySpecialist/astrologyCountry.js";
import astrologyIndia from "../Data/astrologySpecialist/astrologyIndia.js";
import Footer from "../Components/Footer.jsx";
import YtQuery from "../Components/YtQuery.jsx";

const AstrologySpecialist = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row p-6 lg:p-10 gap-6">
        
        {/* Sidebar */}
        {/* Main Content */}
        <main className="flex-1 space-y-10">
          <section className="bg-gray-100 p-8 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-4">Astrology Specialist</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              Astrology, a centuries-old practice, is widely recognized for its
              ability to provide effective solutions to various life challenges.
              This webpage is dedicated to offering astrological guidance to
              help individuals find peace and purpose.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nikhil Sharma</strong>, a trusted and perceptive
              astrologer, is renowned worldwide for his expertise in astrology.
              He has helped countless people overcome personal and professional
              challenges.
            </p>
          </section>

          <section className="bg-yellow-100 p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">
              Awards and Recognitions
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Gold Medal in Astrology</li>
              <li>Lalkitab Rattan</li>
              <li>Jyotish Visharad</li>
              <li>Jyotish Samrat</li>
              <li>Jyotish Shiromani, etc.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">
              All Astrology Services by Astrologer Nikhil Sharma
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our expert astrologer offers a broad range of transformative
              astrology services, addressing various aspects of life. These
              services are affordable and accessible to all, ensuring everyone
              can benefit from astrological insights.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
              <li>Businesses and Professions</li>
              <li>Love and Romance</li>
              <li>Arranged, Love, and Inter-caste Marriages</li>
              <li>Familial or Domestic Life</li>
              <li>Progeny</li>
              <li>Health Problems</li>
              <li>Education and Career</li>
              <li>Progress and Growth in Careers</li>
              <li>Compatibility and Harmony in Relationships</li>
              <li>Investments in Stock Market or Real Estate</li>
              <li>Money and Finances</li>
              <li>Many other life aspects</li>
            </ul>
          </section>

          {/* Video and Contact Section */}
          <section className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <video className="rounded-lg shadow-lg w-full" controls>
                  <source src="/videos/awardCeremony.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow p-6 md:w-1/2">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Contact Us for Solutions
              </h2>
              <p className="italic text-sm mb-2">
                "Quit Sadness, Catch Happiness!"
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  className="w-full border p-3 rounded"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  className="w-full border p-3 rounded"
                  placeholder="E-mail Id"
                  required
                />
                <input
                  type="tel"
                  className="w-full border p-3 rounded"
                  placeholder="Phone Number"
                  required
                />
                <input
                  type="text"
                  className="w-full border p-3 rounded"
                  placeholder="City"
                  required
                />
                <textarea
                  className="w-full border p-3 rounded"
                  placeholder="Your Query"
                  rows="4"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-red-600 text-white font-bold py-2 px-4 w-full rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default AstrologySpecialist;