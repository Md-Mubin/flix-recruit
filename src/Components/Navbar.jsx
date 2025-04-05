"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa"

const Navbar = () => {

    // all hooks 
    const [show, setShow] = useState(false)
    const [scrolling, setScrolling] = useState(false) // for scrolling nav effect

    // useEffect for handleing the scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        
        handleScroll()

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className='justify-center w-full fixed top-[49px] z-[100] hidden lg:flex'>
                <div className={`flex items-center justify-between w-[1339px] rounded-2xl duration-200 ${scrolling && "bg-[#0646ac4d] backdrop-blur-lg"}`}>
                    <img loading='lazy' src="/images/logo.png" alt="nav logo" />

                    <ul className='flex items-center lg:gap-[116px] font-medium text-[22px] text-[#000] tracking-widest'>
                        <li className='hover:text-[#fff] relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-[#fff] after:left-0 after:bottom-0 hover:after:w-full after:duration-200'>
                            <a href="#">Home</a>
                        </li>

                        <li className='hover:text-[#fff] relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-[#fff] after:left-0 after:bottom-0 hover:after:w-full after:duration-200'>
                            <a href="#">Jobs</a>
                        </li>

                        <li className='hover:text-[#fff] relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-[#fff] after:left-0 after:bottom-0 hover:after:w-full after:duration-200'>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>


                    <div className='flex items-center relative'>
                        <button className='relative py-3 px-4 xl:py-[17px] xl:px-[32px] bg-[#0647AC] rounded-[12px] cursor-pointer font-semibold tracking-widest lg:text-lg text-[#fff] after:content-[""] after:w-[10px] after:h-[140px] after:bg-[#fff] after:absolute after:rotate-[-45deg] after:blur after:top-[-50%] after:left-[-30%] hover:after:animate-[swipe_0.3s_linear] overflow-hidden'>
                            Book A Call
                        </button>

                        <button onClick={() => setShow(!show)} className='text-3xl mx-4 p-3 cursor-pointer bg-[#3c6bb6] text-[#f0f0f0] hover:bg-[#0648ac] duration-200 rounded-full'><FaRegUserCircle /></button>
                        <ul className={`flex items-center gap-4 font-normal text-lg bg-[#0646ac4d] backdrop-blur-lg w-[350px] absolute top-20 z-[-1] right-0 p-4 rounded-[12px] duration-200  ${show ? "opacity-100" : " opacity-0 pointer-events-none translate-y-[-20px]"}`}>
                            <li className='w-full'>
                                <Link href="#">
                                    <button className='py-2 w-full hover:bg-[#0646ac4d] hover:backdrop-blur-lg text-[#000] hover:text-[#fff] cursor-pointer duration-100 rounded-lg'>
                                        Log In
                                    </button>
                                </Link>
                            </li>

                            <li className='w-full'>
                                <Link href="#">
                                    <button className='py-2 w-full hover:bg-[rgba(6,70,172,0.3)] hover:backdrop-blur-lg text-[#000] hover:text-[#fff] cursor-pointer duration-100 rounded-lg'>
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