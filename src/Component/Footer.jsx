import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
        <div className='relative'>
          <img className='brightness-50 opacity-100' src="/public/Footer.jpeg" alt="" />
          <div className="absolute inset-0 flex justify-center bg-opacity-50">
            <p className="font-bebas text-white text-3xl font-normal  top-0 mt-36">
              WE READY TO HAVE YOU THE BEST DINING EXPERIENCES
            </p>
          </div>
          <div className='flex'>
            <div className='absolute inset-52 bg-opacity-50 '>
              <h1 className='ml-24 text-[#FFC900]'><IoTimeOutline /></h1>
              <h1 className='font-bebas text-[#F7F8F9] font-light ml-16 mt-4'>OPENING HOURS</h1>
              <p className='ml-14 text-xs text-[#F7F8F9]'>Monday - Sunday</p>
              <p className='ml-12 text-xs text-[#F7F8F9]'>9:00 AM to 11:30 PM</p>
            </div>
            <div className='absolute inset-52 bg-opacity-50 ml-48 '>
              <h1 className='ml-24 text-[#FFC900]'><MdOutlinePhoneInTalk /></h1>
              <h1 className='font-bebas text-[#F7F8F9] font-light ml-[76px] mt-4'>LET'S TALK</h1>
              <p className='ml-10 text-xs text-[#F7F8F9]'>Phone: 1-800-222-4545</p>
              <p className='ml-12 text-xs text-[#F7F8F9]'>Fax: 1-800-222-4545</p>
            </div>
            <div className='absolute inset-52 bg-opacity-50 ml-96'>
              <h1 className='ml-24 text-[#FFC900]'><CgMail /></h1>
              <h1 className='font-bebas text-[#F7F8F9] font-light ml-[70px] mt-4'>BOOK A TABLE</h1>
              <p className='ml-9 text-xs text-[#F7F8F9]'>Email: demo@website.com</p>
              <p className='ml-7 text-xs text-[#F7F8F9]'>Support: support@website.com</p>
            </div>
            <div className='absolute inset-52 bg-opacity-50 ml-[576px]'>
              <h1 className='ml-24 text-[#FFC900]'><IoLocationOutline /></h1>
              <h1 className='font-bebas text-[#F7F8F9] font-light ml-[70px] mt-4'>OUR ADDRESS</h1>
              <p className='ml-[9px] text-xs text-[#F7F8F9]'>123 Stree New York City , United </p>
              <p className='ml-12 text-xs text-[#F7F8F9]'>States Of America.</p>
            </div>
          </div>
          <div>
            <div className='flex absolute inset-52 items-center justify-center w-[30px] h-[20px] mt-48 ml-[350px]'>
              <img src="/public/Frame.png" alt="" />
              <img className='ml-4' src="/public/Frame (1).png" alt="" />
              <img className='ml-4' src="/public/Frame (2).png" alt="" />
              <img className='ml-4' src="/public/Frame (3).png" alt="" />  
            </div>
            <div className='absolute inset-52 mt-60 ml-[280px]'>
              <p className='text-white text-sm'>© 2023 All Rights Reserved </p>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default Footer