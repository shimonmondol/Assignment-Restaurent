import React from 'react'

const Customer = () => {
  return (
    <div>
        <div className='flex mt-[60px] ml-[130px]'>
            <div>
                <div className='flex'>
                    <img className='w-2 h-2 mt-[6px]' src="/public/Pointer.png" alt="" />
                    <p className='font-roboto font-semibold text-sm text-[#BD1F17] ml-2 '>Crispy, Every Bite Taste</p>
                </div>
                <h1 className='font-bebas text-3xl mt-2'>WHAT SOME OF MY CUSTOMERS SAY</h1>
            </div>
            <div>
                <img className='ml-[490px] w-[100px] h-[50px]' src="/public/Array.png" alt="" />
            </div>     
        </div>
        <div className='flex'>
            <div>
                <img className='w-[70px] h-32 mt-[-30px]' src="/public/Customer1.png" alt="" />
            </div>
            <div className='bg-[#FEBF00] w-[400px] h-[400px] mt-8 ml-[64px]'>
                <img className='mt-12 ml-12' src="/public/Dot.png" alt="" />
                <h1 className='font-roboto text-sm ml-16'>You can't go wrong with Chicken Mandi,<br /> I had it twice. The chicken was cooked <br /> perfectly, juicy & soft (usually mandi <br /> chicken is a bit dry). I would defiantly <br /> recommend it.</h1>
                <div className='flex'>
                    <div>
                        <img className='mt-36' src="/public/Group.png" alt="" />
                    </div>
                    <div className='flex ml-6 mt-36'>
                        <div className='leading-5'>
                            <p className='font-bebas'>KHALID AL DAWSRY</p>
                            <p className='font-roboto text-sm'>Jeddah, Saudi</p>
                            <h1 className='bg-black w-[240px] h-[1px] mt-3'></h1>
                        </div> 
                        <div>
                            <img className='mr-2' src="/public/Image.png" alt="" />
                            <h1 className='bg-[#BD1F17] w-[40px] h-[5px] mt-2'></h1>
                        </div> 
                    </div> 
                    
                </div> 
            </div>
            <div className='flex'>
                <img className='w-[520px] h-[400px] mt-8' src="/public/Video.png" alt="" />
                <img className='w-[180px] h-[200px] mt-64 mr-' src="/public/Customer2.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Customer