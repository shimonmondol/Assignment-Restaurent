import React from 'react';

const Customer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center mt-10">
        <div>
          <div className="flex items-center">
            <img
              className="w-4 h-4"
              src="/public/Pointer.png"
              alt="Pointer Icon"
            />
            <p className="font-roboto font-semibold text-sm text-[#BD1F17] ml-2">
              Crispy, Every Bite Taste
            </p>
          </div>
          <h1 className="font-bebas text-2xl md:text-3xl mt-2 text-center md:text-left">
            WHAT SOME OF MY CUSTOMERS SAY
          </h1>
        </div>
        <div className="mt-4 md:mt-0 md:ml-auto">
          <img
            className="w-20 md:w-28"
            src="/public/Array.png"
            alt="Arrow Icon"
          />
        </div>
      </div>

      {/* Customer Section */}
      <div className="flex flex-wrap justify-center mt-8 gap-6">
        {/* Customer Testimonial Card */}
        <div className="bg-[#FEBF00] w-full md:w-[48%] lg:w-[30%] p-4 rounded-lg shadow-md">
          <img
            className="w-16 h-16 mx-auto"
            src="/public/Customer1.png"
            alt="Customer"
          />
          <img
            className="w-4 h-4 mx-auto mt-4"
            src="/public/Dot.png"
            alt="Dot Decoration"
          />
          <p className="font-roboto text-sm text-center mt-4">
            You can't go wrong with Chicken Mandi, I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would definitely recommend it.
          </p>
          <div className="flex items-center justify-center mt-8">
            <img src="/public/Group.png" alt="Group Icon" />
            <div className="ml-4 text-center">
              <p className="font-bebas">KHALID AL DAWSRY</p>
              <p className="font-roboto text-sm">Jeddah, Saudi</p>
              <hr className="border-t border-black w-32 mt-2" />
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-[48%] lg:w-[60%] relative">
          <img
            className="w-full h-auto rounded-lg"
            src="/public/Video.png"
            alt="Video"
          />
          <img
            className="absolute bottom-[-40px] right-[-10px] w-20 h-20 rounded-full"
            src="/public/Customer2.png"
            alt="Customer 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Customer;
