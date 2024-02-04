import React from 'react'
import logo from '../../assets/logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube,FaInstagram  } from "react-icons/fa";
import ins from '../../assets/ins.svg'
import google from '../../assets/playstor.webp'
import apple from '../../assets/apple.svg'




const Footer = () => {
  return (
    <>
    <section className='bg-[#001524] py-[50px]'>
        <div className="max-w-container mx-auto">
            <div className="footer_main flex ">
                <div className='w-1/2'>
                    <div className="left flex ">
                        <div className='w-1/2 '>
                            <div className='cursor-pointer'>
                            <img src={logo} alt="logo" className='h-[50px]  ' />
                             </div>
                            <p className='text-white text-[18px] font-bold font-paragraph cursor-pointer py-[10px]'>Who we are</p>
                            <p className='text-white text-[18px] font-bold font-paragraph cursor-pointer'>Contact Us</p>
                        </div>
                        <div className='w-1/2'>
                            <h4 className='text-white text-[18px] font-bold font-heading  '>BROWSE</h4>
                            <ul >
                                <li className='text-white text-[18px] font-thin font-paragraph cursor-pointer'>Movies</li>
                                <li className='text-white text-[18px] font-thin font-paragraph cursor-pointer'>Shows</li>
                                <li className='text-white text-[18px] font-thin font-paragraph cursor-pointer'>Drama</li>
                                <li className='text-white text-[18px] font-thin font-paragraph cursor-pointer'>Boom</li>
                                <li className='text-white text-[18px] font-thin font-paragraph cursor-pointer'>TV</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className="right flex ">
                        <div className='w-1/2'>
                            <h4 className='text-white text-[18px] font-bold font-heading  '>LEGAL</h4>
                            <ul >
                                <li className='text-white text-[18px] font-thin font-paragraph cursor-pointer'>Terms & Conditions</li>
                                <li className='text-white text-[18px] font-thin font-paragraph cursor-pointer'>Open Source Agreements</li>
                                <li className='text-white text-[18px] font-thin font-paragraph cursor-pointer'>FAQ</li>
                                <li className='text-white text-[18px] font-thin font-paragraph cursor-pointer'>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className='w-1/2'>
                        <h4 className='text-white text-[18px] font-bold font-heading mb-[15px]'>Follow</h4>
                        <div className='icon flex gap-[10px]'>
                            <div className='h-[50px] w-[50px] rounded-full bg-[#0866FF] flex justify-center items-center cursor-pointer'>
                            <FaFacebookF  className='text-[20px] text-white '/>
                            </div>
                            <div className='h-[50px] w-[50px] rounded-full bg-[#FF0000] flex justify-center items-center cursor-pointer'>
                            <FaYoutube  className='text-[20px] text-white'/>
                            </div>
                            <div className='h-[50px] w-[50px] rounded-full bg-red-500 flex justify-center items-center cursor-pointer'>
                                <img src={ins} alt=""  className='h-full w-full'/>
                            </div>
                        </div>
                        <div className='w-[170px] pt-[20px] cursor-pointer'>
                            <img src={google} alt="" />
                        </div>
                        <div className='w-[170px] pt-[7px] cursor-pointer'>
                            <img src={apple} alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer