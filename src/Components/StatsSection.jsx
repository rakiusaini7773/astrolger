import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-300 to-indigo-900 text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Now We Have</h2>
        <p className="mt-4 max-w-md mx-auto text-gray-300">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-700 rounded-full mb-4 relative">
            <span 
              className="text-3xl font-bold w-full h-full bg-cover bg-center absolute flex items-center justify-center"
              style={{ backgroundImage: "url('https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/09/choose-1-01-1.png')" }}
            >
              80+
            </span>
          </div>
          <p className="text-lg">Qualified Astrologers</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-700 rounded-full mb-4 relative">
            <span 
              className="text-3xl font-bold w-full h-full bg-cover bg-center absolute flex items-center justify-center"
              style={{ backgroundImage: "url('https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/09/choose-1-01-1.png')" }}
            >
              50+
            </span>
          </div>
          <p className="text-lg">Success Horoscope</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-700 rounded-full mb-4 relative">
            <span 
              className="text-3xl font-bold w-full h-full bg-cover bg-center absolute flex items-center justify-center"
              style={{ backgroundImage: "url('https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/09/choose-1-01-1.png')" }}
            >
              12+
            </span>
          </div>
          <p className="text-lg">Year's Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-700 rounded-full mb-4 relative">
            <span 
              className="text-3xl font-bold w-full h-full bg-cover bg-center absolute flex items-center justify-center"
              style={{ backgroundImage: "url('https://kamleshyadav.com/wp/astrologer/demo3/wp-content/uploads/sites/4/2021/09/choose-1-01-1.png')" }}
            >
              90+
            </span>
          </div>
          <p className="text-lg">Offices Worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
