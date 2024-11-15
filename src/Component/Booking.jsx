import React from 'react'

const Booking = () => {
  return (
    <div>
        <div className='relative'>
            <img src="/public/Booking.jpeg" alt="" />
            <div className="absolute inset-0 flex bg-opacity-50 ml-[72px]">
                <img className='w-2 h-2 mt-44 ml-24' src="/public/Pointer.png" alt="" />
                <p className='font-roboto font-semibold text-sm text-[#BD1F17] mt-[170px] ml-4 '>Book Now</p>
            </div>
            <div className='absolute inset-0  text-white  mt-52 ml-[168px]'>
                <h1 className='font-bebas text-3xl'>BOOK YOUR TABLE</h1>
                <p className='font-roboto text-xs mt-4'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo <br /> molestie vel, ornare non id blandit netus.</p>
                <div class="mt-6">
                <img className='w-[500px] h-[300px]' src="/public/Frame 830.png" alt="" />
                </div>
             </div>
        </div>
    </div>
  )
}

export default Booking