import React from 'react'
import { FaPlay } from "react-icons/fa";

const Flix_video = () => {
    return (
        <>
            <section className='py-50 bg-[url("/images/flix_video_img.jpg")] bg-cover bg-center bg-no-repeat bg-fixed relative'>
                <span className='absolute w-full h-full bg-[rgba(0,0,0,0.5)] top-0 left-0 z-[1]'></span>
                <div className="container relative z-10">
                    <ul className='w-[850px] m-auto text-center'>
                        <li>
                            <h2 className='font-bold text-[50px] text-[#fff]'>We continue to help peoples find their passion and job</h2>
                        </li>

                        <li className='mt-10 p-2 bg-[#fff] w-[80px] h-[80px] rounded-full flex justify-center items-center m-auto'>
                            <button className='text-[30px] text-[#000]'><FaPlay /></button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Flix_video