import Link from 'next/link'
import React from 'react'

const Newsletter = () => {
    return (
        <>
            <section className='py-[80px] bg-[#d2e8fd]'>
                <div className="container">
                    <div className='text-center'>
                        <h2 className='font-bold text-[56px] text-[#000]'>Subscribe Newsletter</h2>
                        <p className='lg:w-[700px] m-auto font-normal text-lg text-[#555555]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

                        <ul className='mt-10 flex items-center justify-center gap-4'>
                            <li>
                                <input type="email" className='w-[600px] p-4 bg-[#fff] outline-0 rounded-lg font-semibold text-xsm' placeholder='Enter Your Email'/>
                            </li>
                            <li>
                                <Link href="#">
                                    <button className='px-8 py-4 bg-[#0647ac] font-normal text-xsm text-[#fff] rounded-lg cursor-pointer'>Subscribe</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter