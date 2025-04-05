import React from 'react'
import { FaPlay } from "react-icons/fa";

const Flix_video = () => {
    return (
        <>
            <section className='py-[87px] bg-[url("/images/flix_video_img.png")] bg-cover bg-center bg-no-repeat bg-fixed relative'>
                <span className='absolute w-full h-full bg-[rgba(0,0,0,0.5)] top-0 left-0 z-[1]'></span>
                <div className="container relative z-10">
                    <ul className='w-[850px] m-auto text-center'>
                        <li>
                            <h2 className='font-bold text-[50px] text-[#fff] tracking-widest'>Watch our Demo to see how FlixRecruit works:</h2>
                        </li>

                        <li className='my-6 p-2 bg-[#0647AC] w-[80px] h-[80px] rounded-full flex justify-center items-center m-auto'>
                            <button className='text-[30px] text-[#fff]'><FaPlay /></button>
                        </li>

                        <li>
                            <a src="#" className='py-[17px] px-[29px] bg-[#0647AC] rounded-2xl text-[#fff] text-lg tracking-widest'>Watch the video</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Flix_video