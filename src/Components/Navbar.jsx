"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa"

const Navbar = () => {

    const [show,setShow] = useState(false)
    
    return (
        <>
            <nav className='flex justify-center w-full fixed top-[49px]'>
                <div className="flex items-center justify-between w-[1339px] bg-[rgba(0,0,0,0.1)] rounded-2xl backdrop-blur-lg">
                    <img loading='lazy' src="/images/logo.png" alt="nav logo" />

                    <ul className='flex items-center gap-[116px] ml-[53px] mr-[119px] font-normal text-[22px] text-[#000]'>
                        <li className='hover:text-[#0647ac] duration-200 '>
                            <a href="#">Home</a>
                        </li>

                        <li className='hover:text-[#0647ac] duration-200'>
                            <a href="#">Jobs</a>
                        </li>

                        <li className='hover:text-[#0647ac] duration-200'>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>


                    <div className='flex items-center relative'>
                        <button className='py-[17px] px-[32px] bg-[#0647AC] rounded-[12px] cursor-pointer font-normal text-lg text-[#fff]'>
                            Book A Call
                        </button>

                        <button onClick={()=>setShow(!show)} className='text-4xl mx-4 p-4 cursor-pointer hover:text-[#0647ac]'><FaRegUserCircle /></button>
                        <ul className={`flex items-center gap-4 font-normal text-lg bg-[#d2e8fd] w-[200px] absolute top-[60px] z-[-1] right-0 pt-8 pb-4 rounded-b-[12px] duration-200 border-b-2 border-[#0647ac] ${show ? "opacity-100": " opacity-0 pointer-events-none translate-y-[-20px]"}`}>
                            <li className='w-full'>
                                <Link href="#">
                                    <button className='py-2 w-full hover:bg-[#a8c9e7] text-[#000] cursor-pointer duration-200 rounded-lg'>
                                        Log In
                                    </button>
                                </Link>
                            </li>

                            <li className='w-full'>
                                <Link href="#">
                                    <button className='py-2 w-full hover:bg-[#a8c9e7] text-[#000] cursor-pointer duration-200 rounded-lg'>
                                        Sign Up
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar