import React from "react";
import { FaFire, FaHeadset, FaUsers } from "react-icons/fa"; // Import icons for services

const ServicesSection = () => {
  const services = [
    {
      icon: <FaFire size={36} className="text-orange-500" />,
      title: "Astrology",
      description: "Discover the ancient wisdom of Vedic astrology to understand your life's purpose and align with cosmic energies.",
      link: "/Astrology-Specialist"
    },
    {
      icon: <FaHeadset size={36} className="text-orange-500" />,
      title: "Astrology Advice",
      description: "Receive personalized guidance and insights to navigate life's challenges with clarity and confidence.",
      link: "/Contact"
    },
    {
      icon: <FaUsers size={36} className="text-orange-500" />,
      title: "Relationship",
      description: "Gain insights into your relationships and learn how to strengthen your bonds with others.",
      link: "/Love-Vashikaran-Specialist"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">Daily Routines</h2>
          <p className="text-gray-600 mt-4 mx-auto text-lg sm:text-xl">
            Explore our daily astrology services designed to help you find balance, growth, and alignment in every aspect of your life.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-orange-100 shadow-md relative group">
                  {service.icon}
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full border-4 border-dotted border-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">{service.title}</h3>
              <div className="border-b-2 border-orange-500 w-12 mx-auto mt-3 mb-6"></div>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.description}</p>
              <a
                href={service.link}
                className="text-orange-500 font-semibold hover:text-black hover:text-sm transition-colors duration-300"
              >
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
