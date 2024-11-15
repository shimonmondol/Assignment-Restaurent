import React from 'react';

const Banner = () => {
  return (
    <div className="bg-red-600 h-auto lg:h-[600px]">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center px-4 lg:px-16 py-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            className="w-10 h-10"
            src="/public/Logo.png"
            alt="Logo"
          />
          <h1 className="font-poppins font-semibold text-white text-lg ml-2">Restaurant</h1>
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex space-x-6 font-raleway text-xs text-white">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Clients</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        {/* Button */}
        <button className="font-roboto font-semibold text-xs bg-[#FEBF00] px-4 py-2 lg:w-28">
          BOOK A TABLE
        </button>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-wrap justify-center lg:justify-between items-center px-4 lg:px-16 py-8">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:ml-12">
          <h1 className="font-bebas font-medium text-4xl lg:text-6xl text-white mt-4 lg:mt-28">
            TASTE THE AUTHENTIC<br /> SAUDI CUISINE
          </h1>
          <p className="font-roboto text-white text-sm mt-4">
            Among the best Saudi chefs in the world, serving <br /> you something beyond flavor.
          </p>
          <button className="font-roboto font-semibold text-xs bg-[#FEBF00] px-4 py-2 mt-4">
            EXPLORE MENU
          </button>
        </div>

        {/* Image Section */}
        <div className="relative mt-8 lg:mt-0">
          <img
            className="w-full max-w-md lg:max-w-lg"
            src="/public/image 1.png"
            alt="Dish"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
