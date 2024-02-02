import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Lates = () => {
  return (
    <>
    <section className='bg-[#000]'>
        <div className="max-w-container mx-auto">
            <div className="lates_main">
                <div className="flex items-center gap-[10px] text-white">
                <p className='font-bold text-[25px]'>BEST AND LATEST</p> <span className='flex items-center gap-[5px] text-[18px] text-thin cursor-pointer'>SEE ALL  <IoIosArrowForward /></span>
                </div>

                <div className='py-[15px] flex items-center gap-[20px]'>
                <div className='border-[1px] h-[350px] w-[200px] rounded-[10px] cursor-pointer relative'>
                <span className='bg-yellow-500 rounded-[5px] text-white px-[7px] py-[2.5px] absolute top-0 right-0'>10 taka</span>
                </div>
                <div className='border-[1px] h-[350px] w-[200px] rounded-[10px] cursor-pointer relative'>
                <span className='bg-yellow-500 rounded-[5px] text-white px-[7px] py-[2.5px] absolute top-0 right-0'>10 taka</span>
                </div>
                <div className='border-[1px] h-[350px] w-[200px] rounded-[10px] cursor-pointer relative'>
                <span className='bg-yellow-500 rounded-[5px] text-white px-[7px] py-[2.5px] absolute top-0 right-0'>10 taka</span>
                </div>
                <div className='border-[1px] h-[350px] w-[200px] rounded-[10px] cursor-pointer relative'>
                <span className='bg-yellow-500 rounded-[5px] text-white px-[7px] py-[2.5px] absolute top-0 right-0'>10 taka</span>
                </div>
                <div className='border-[1px] h-[350px] w-[200px] rounded-[10px] cursor-pointer relative'>
                <span className='bg-yellow-500 rounded-[5px] text-white px-[7px] py-[2.5px] absolute top-0 right-0'>10 taka</span>
                </div>
                <div className='border-[1px] h-[350px] w-[200px] rounded-[10px] cursor-pointer relative'>
                <span className='bg-yellow-500 rounded-[5px] text-white px-[7px] py-[2.5px] absolute top-0 right-0'>10 taka</span>
                </div>
                </div>


            </div>
        </div>
    </section>
    </>
  )
}

export default Lates