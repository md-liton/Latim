import React from 'react'
import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
    <section  className=' fixed top-0 left-0 w-full bg-[#000]'>
        <div className="max-w-container mx-auto">
            <div className="navbar_main flex justify-center items-center py-[10px]">
                <div className='w-[15%]'>
                    <div className='cursor-pointer'>
                    <img src={logo} alt="logo" className='h-[50px] ' />
                    </div>
                </div>
                <div className='w-[70%]'>
                    <ul className='flex justify-center items-center gap-[15px] text-[15px] font-thin font-heading text-white'>
                        <li className='cursor-pointer hover:text-red-500'>MOVIE</li>
                        <li className='cursor-pointer hover:text-red-500'>SHOWS</li>
                        <li className='cursor-pointer hover:text-red-500'>DRAMA</li>
                        <li className='cursor-pointer hover:text-red-500'>TV</li>
                        <li className='cursor-pointer hover:text-red-500'>BOOM</li>
                        <li className='cursor-pointer hover:text-red-500'>DISCOVER</li>
                        <li className='cursor-pointer hover:text-red-500'>COOMING SOON <span className='text-[12px] bg-red-500 rounded-[5px] text-white font-thin p-[3px]'>new</span></li>
                        <li className='cursor-pointer text-red-500'>SUBSCRIBE</li>
                        <li className='cursor-pointer'><CiSearch /></li>
                        <li className='cursor-pointer '>
                            <div className='flex items-center'>
                                <select name="Language" id="" className='bg-transparent focus:outline-none hover:text-red-500'>
                                    <option value="" className='text-[#C7C8CC]'>ENGLISH</option>
                                    <option value="" className='text-[#C7C8CC]'>বাংলা</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='w-[15%]'>
                    <div className='text-[15px] font-heading bg-red-500 cursor-pointer text-center text-white py-[15px] rounded-[10px]'>Longing/Register</div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Navbar