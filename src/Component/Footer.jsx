import React from 'react';
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="relative bg-black text-white">
      {/* Background Image */}
      <div className="relative">
        <img
          className="w-full h-96 object-cover brightness-50"
          src="/public/Footer.jpeg"
          alt="Footer Background"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center font-bebas text-2xl md:text-4xl font-normal text-white">
            WE ARE READY TO GIVE YOU THE BEST DINING EXPERIENCES
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-6 md:px-16">
        {/* Opening Hours */}
        <div className="text-center">
          <IoTimeOutline className="text-[#FFC900] text-4xl mx-auto" />
          <h2 className="font-bebas text-xl text-[#F7F8F9] mt-2">OPENING HOURS</h2>
          <p className="text-sm">Monday - Sunday</p>
          <p className="text-sm">9:00 AM to 11:30 PM</p>
        </div>

        {/* Let's Talk */}
        <div className="text-center">
          <MdOutlinePhoneInTalk className="text-[#FFC900] text-4xl mx-auto" />
          <h2 className="font-bebas text-xl text-[#F7F8F9] mt-2">LET'S TALK</h2>
          <p className="text-sm">Phone: 1-800-222-4545</p>
          <p className="text-sm">Fax: 1-800-222-4545</p>
        </div>

        {/* Book a Table */}
        <div className="text-center">
          <CgMail className="text-[#FFC900] text-4xl mx-auto" />
          <h2 className="font-bebas text-xl text-[#F7F8F9] mt-2">BOOK A TABLE</h2>
          <p className="text-sm">Email: demo@website.com</p>
          <p className="text-sm">Support: support@website.com</p>
        </div>

        {/* Our Address */}
        <div className="text-center">
          <IoLocationOutline className="text-[#FFC900] text-4xl mx-auto" />
          <h2 className="font-bebas text-xl text-[#F7F8F9] mt-2">OUR ADDRESS</h2>
          <p className="text-sm">123 Street New York City</p>
          <p className="text-sm">United States Of America</p>
        </div>
      </div>

      {/* Social Media & Footer */}
      <div className="text-center py-4">
        <div className="flex justify-center space-x-4 mb-4">
          <img src="/public/Frame.png" alt="Social 1" className="w-8 h-8" />
          <img src="/public/Frame (1).png" alt="Social 2" className="w-8 h-8" />
          <img src="/public/Frame (2).png" alt="Social 3" className="w-8 h-8" />
          <img src="/public/Frame (3).png" alt="Social 4" className="w-8 h-8" />
        </div>
        <p className="text-xs">© 2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
