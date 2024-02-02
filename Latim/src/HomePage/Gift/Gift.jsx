import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Gift = () => {
  return (
    <>
    <section className='py-[40px] bg-[#000] overflow-x-hidden'>
        <div className="max-w-container mx-auto">
            <div className="gift_main ">
                <div className='flex items-center gap-[10px] text-white'>
                    <p className='font-bold text-[25px]'>GIFT YOUR FAVORITE ARTIST</p> <span className='flex items-center gap-[5px] text-[18px] text-thin cursor-pointer'>SEE ALL  <IoIosArrowForward /></span>
                </div>
                
                <div className='py-[15px] flex items-center justify-between'>
                <div className='border-[1px] h-[130px] w-[240px] rounded-[10px] cursor-pointer'>
                </div>
                <div className='border-[1px] h-[130px] w-[240px] rounded-[10px] cursor-pointer'>
                </div>
                <div className='border-[1px] h-[130px] w-[240px] rounded-[10px] cursor-pointer'>
                </div>
                <div className='border-[1px] h-[130px] w-[240px] rounded-[10px] cursor-pointer'>
                </div>
                <div className='border-[1px] h-[130px] w-[240px] rounded-[10px] cursor-pointer'>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Gift