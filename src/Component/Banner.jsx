import React from 'react'

const Banner = () => {
  return (
    <div className='bg-red-600 h-[600px]'>
        <div className='flex pt-4'>
            <img className='ml-40 pt-4 w-[25px] h-[40px]' src="/public/Logo.png" alt="" />
            <h1 className='font-poppins font-semibold text-[#FFFFFF] mt-4 ml-4'>Restaurant</h1>
            <ul className='flex mt-[22px] ml-12 font-raleway text-xs text-[#FFFFFF] gap-6'>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Clients</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <button className='font-roboto font-semibold text-xs bg-[#FEBF00] w-28 h-8 ml-56 mt-4'>BOOK A TABLE</button>
        </div>
        <div className='flex justify-center'>
          <div className='ml-12 '>
              <h1 className='font-bebas font-medium text-6xl text-[#FFFFFF] mt-28 ml-16'>TASTE THE AUTHE<br />  SAUDI CUISINE</h1>
              <p className='font-roboto text-[#FFFFFF] text-xs mt-4 ml-16'>Among the best Saudi chefs in the world, serving <br /> you something beyond flavor. </p>
              <button className='font-roboto font-semibold text-xs bg-[#FEBF00] w-28 h-8 mt-4 ml-16'>EXPLORE MENU</button>
          </div>
          <div>
            {/* <img className='w-6 h-6 ml-[400px]' src="/public/Vector.png" alt="" /> */}
            
            <img className='relative w-[500px] mt-12' src="/public/image 1.png" alt="" />
            <h1 className='absolute inset-0 top-44 left-[550px] font-bebas font-medium text-6xl bg-red-800 w-[100px] h-[130px] ml-[-2px] text-[#FFFFFF]'> NTIC</h1>
          </div>
        </div>
    </div>
  )
}

export default Banner