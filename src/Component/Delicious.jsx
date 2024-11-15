import React from 'react';
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Delicious = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        <div className="mt-8 lg:ml-[140px] lg:mt-16">
          <img className="w-full max-w-[400px] h-auto lg:w-[400px] lg:h-[300px]" src="/public/Image2.png" alt="Food Image" />
        </div>
        <div className="mt-8 lg:mt-16 pl-8">
          <div className="flex space-x-4 list-none">
            <div className="bg-[#B52B1D] w-[55px] h-[25px] flex items-center justify-center">
              <li className="text-white text-xs">About</li>
            </div>
            <li className="text-xs">Experience</li>
            <li className="text-xs">Contact</li>
          </div>
          <h1 className="font-bebas text-2xl lg:text-4xl mt-4 lg:mt-8 text-[#181818]">
            EXCEPTIONAL CULINARY <br /> EXPERIENCE AND DELICIOUS FOOD
          </h1>
          <p className="font-roboto font-normal leading-5 text-[#333333] text-xs lg:text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
          </p>
          <div className="flex items-center space-x-4 mt-5">
            <button className="bg-[#FEBF00] font-roboto w-[100px] h-[35px] font-bold text-xs">ABOUT MORE</button>
            <div className="flex items-center space-x-2 text-[#BD1F17]">
              <MdOutlinePhoneInTalk className="text-lg" />
              <h1 className="font-roboto font-semibold text-xs">+88 3426 739 485</h1>
            </div>
          </div>
        </div>
        <img className="hidden lg:block w-[70px] h-[130px] mt-8 lg:mt-[280px]" src="/public/Image3.png" alt="Decoration Image" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-2 lg:mt-8 ml-10 text-center">
        <div className="flex items-center justify-center space-x-4">
          <img className="w-[60px] h-[60px]" src="/public/Group-1.png" alt="Fast Delivery Icon" />
          <div>
            <h1 className="font-bebas font-normal">FAST DELIVERY</h1>
            <p className="text-xs text-[#0A1425] font-inter">Within 30 minutes</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <img className="w-[60px] h-[60px]" src="/public/Group-2.png" alt="Absolute Dining Icon" />
          <div>
            <h1 className="font-bebas font-normal">ABSOLUTE DINING</h1>
            <p className="text-xs text-[#0A1425] font-inter">Best buffet restaurant</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <img className="w-[60px] h-[60px]" src="/public/Group-3.png" alt="Pickup Delivery Icon" />
          <div>
            <h1 className="font-bebas font-normal">PICKUP DELIVERY</h1>
            <p className="text-xs text-[#0A1425] font-inter">Grab your food order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delicious;
