import React from 'react'

const Hero = () => {
    return (
        <>
            <section className='pt-[207px] pb-[90px] bg-[#d2e8fd]'>
                <div className='container'>
                    <div className=' flex items-center justify-between pl-[49px]'>
                        <ul className='w-[651px]'>
                            <li>
                                <h1 className='font-bold text-[68px] text-[#0647AC] leading-[76px]'><span className='text-[#000]'>Talent On Demand</span> Hire The Best Without The Hassle</h1>
                            </li>

                            <li className='my-9 w-[500px]'>
                                <p className='font-normal text-[22px] text-[#000] leading-[32px]'>Join hundreds of companies finding the right talents. FlixRecruit connects You with professionals quickly and efficiently</p>
                            </li>
                        </ul>

                        <div >
                            <img src="/images/hero_img.png" alt="hero image" loading='lazy' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero