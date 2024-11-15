import React from 'react';

const Popular = () => {
  return (
    <div className='bg-[#FBF7F2] mt-16 h-auto sm:h-auto'>
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-auto'>
                <img className='pt-[100px] w-[120px] h-[320px] mx-auto md:mx-0' src="/public/Top-1.png" alt="" />
            </div>
            <div className='mt-[60px] ml-8 w-full md:w-auto'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='items-center sm:ml-36'>
                        <div className='flex'>
                            <img className='w-2 h-2 mt-[6px]' src="/public/Pointer.png" alt="" />
                            <p className='font-roboto font-semibold text-sm text-[#BD1F17] ml-2 '>Crispy, Every Bite Taste</p>
                        </div>
                        <h1 className='font-bebas text-3xl mt-2'>POPULAR FOOD ITEMS</h1>
                    </div>
                    <div className='mt-4 md:mt-0'>
                        <img className='w-[100px] h-[50px] mx-auto md:mx-0' src="/public/Array.png" alt="" />
                    </div>   
                </div>
                <div className='flex flex-wrap justify-center md:justify-start mt-10'>
                    <div className='bg-[#FFFFFF] w-[200px] h-[200px] mx-4 mb-6'>
                        <img className='w-[120px] h-[100px] mx-auto pt-6' src="/public/Burger.png" alt="" />
                        <img className='mx-auto mt-3' src="/public/Line.png" alt="" />
                        <h1 className='font-bebas text-center mt-4'>VEGETABLES BURGER</h1>
                        <p className='text-xs text-center mt-[2px]'>Barbecue Italian cuisine pizza</p>
                    </div>
                    <div className='bg-[#FFFFFF] w-[200px] h-[200px] mx-4 mb-6'>
                        <img className='w-[80px] h-[100px] mx-auto pt-6' src="/public/Pizza.png" alt="" />
                        <img className='mx-auto mt-3' src="/public/Line.png" alt="" />
                        <h1 className='font-bebas text-center mt-4'>SPECIAL PIZZA </h1>
                        <p className='text-xs text-center mt-[2px]'>Barbecue Italian cuisine pizza</p>
                    </div>
                    <div className='bg-[#FFFFFF] w-[200px] h-[200px] mx-4 mb-6'>
                        <img className='w-[100px] h-[100px] mx-auto pt-6' src="/public/Frenzfies.png" alt="" />
                        <img className='mx-auto mt-3' src="/public/Line.png" alt="" />
                        <h1 className='font-bebas text-center mt-4'>SPECIAL FRENCH FRIES </h1>
                        <p className='text-xs text-center mt-[2px]'>Barbecue Italian cuisine</p>
                    </div>
                    <div className='bg-[#FFFFFF] w-[200px] h-[200px] mx-4 mb-6'>
                        <img className='w-[100px] h-[100px] mx-auto pt-6' src="/public/Meat.png" alt="" />
                        <img className='mx-auto mt-3' src="/public/Line.png" alt="" />
                        <h1 className='font-bebas text-center mt-4'>CUISINE CHICKEN</h1>
                        <p className='text-xs text-center mt-[2px]'>Japanese Cuisine Chicken</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Popular;
