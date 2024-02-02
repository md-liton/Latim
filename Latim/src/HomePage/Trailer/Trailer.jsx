import React from 'react'
import img from '../../assets/banner.jpg'
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineSound } from "react-icons/ai";



const Trailer = () => {
  return (
    <>
    <section className=' bg-banner2 bg-no-repeat bg-center bg-cover '>
        <div className='bg-[#000000c0]  py-[40px]' >
        <div className="max-w-container mx-auto">
            <div className="trailer_main flex items-center gap-[25px]">
                <div className='w-1/2 h-[350px] border-[1px] rounded-[10px] overflow-hidden relative'>
                    <img src={img} alt="" className='h-full w-full' />
                    <div className="play_btn h-[50px] w-[50px] rounded-full bg-[#F1EFEF] absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center cursor-pointer ">
                    <CiPlay1 />
                    </div>

                    <div className='absolute right-[-20px] bottom-[100px] rotate-[-90deg]'>
                    <input className='h-[2px] w-[100px]' type="range" />
                    </div>
                    <div className='absolute right-[14px] bottom-[35px]'>
                    <AiOutlineSound className='text-white text-[20px]' />
                    </div>


                </div>
                <div className='w-1/2 h-[350px]'>
                    <h1 className='text-white text-[45px] font-bold font-heading'>Osomoy - Trailer</h1>
                    <p className='text-white text-[20px] font-thin font-paragraph my-[10px]'>2024 | Legal Drama, Comedy, Youth</p>
                    <span className='bg-yellow-500 py-[3px] px-[7px] text-white rounded-[3px]'> 20 tk</span>
                    <p className='text-[#F1EFEF] text-[20px] my-[15px] pr-[150px] font-thin font-paragraph'>Caught between her middle-class background and her rich university friends, Urbi navigates a world of wealth and privilege. But as she chases her dreams, she falls into a life-changing chaos, paying a high price for her ambitions.</p>
                    <div>
                        <button className='text-[25px] text-white font-thin font-heading bg-red-500 rounded-[10px] px-[20px] py-[10px] border-[1px] border-red-500 hover:bg-transparent mr-[15px]'>Watch Now</button>
                        <button className='text-[25px] text-white font-thin font-heading bg-transparent rounded-[10px] px-[20px] py-[10px] border-[1px] border-red-500 hover:bg-red-500 '>+ Add To List</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Trailer