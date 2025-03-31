"use client"
import React, { useEffect } from 'react'
import "aos/dist/aos.css";

const Hero = () => {

    useEffect(()=>{
        import("aos").then((AOS) => AOS.init({once : true, offset : 200}));
      },[])

    return (
        <>
            <section className='pt-[207px] pb-[90px] bg-[#d2e8fd]'>
                <div className='container'>
                    <div className=' flex items-center justify-between pl-[49px]'>
                        <ul data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className='w-[651px]'>
                            <li>
                                <h1 className='font-bold text-[68px] text-[#0647AC] leading-[76px]'><span className='text-[#000]'>Talent On Demand</span> Hire The Best Without The Hassle</h1>
                            </li>

                            <li className='my-9 w-[500px]'>
                                <p className='font-normal text-[22px] text-[#000] leading-[32px]'>Join hundreds of companies finding the right talents. FlixRecruit connects You with professionals quickly and efficiently</p>
                            </li>
                            
                            <li className='flex items-center gap-[26px]'>
                                <a href="#">
                                    <button className='py-[17px] px-[37px] font-normal text-[#000] text-lg ring-2 ring-[#0647AC] rounded-[20px] hover:ring-0 hover:bg-[#0647AC] hover:text-[#fff] duration-200 cursor-pointer hover:rounded-[30px]'>Get Started</button>
                                </a>

                                <a href="#">
                                    <button className='py-[17px] px-[37px] font-normal text-[#000] text-lg ring-2 ring-[#0647AC] rounded-[20px] hover:ring-0 hover:bg-[#0647AC] hover:text-[#fff] duration-200 cursor-pointer hover:rounded-[30px]'>Learn More</button>
                                </a>
                            </li>
                        </ul>

                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                            <img src="/images/hero_img.png" alt="hero image" loading='lazy' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero