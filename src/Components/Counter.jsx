import React from 'react'
import SlotCounter from "react-slot-counter"

const Counter = () => {
    return (
        <>
            <section className='py-10 bg-[#d2e8fd]'>
                <div className="container">
                    <ul className='text-center flex flex-wrap lg:flex-nowrap justify-center items-center lg:justify-between gap-10 lg:gap-0'>
                        <li className='font-bold text-[56px] text-[#000] flex flex-col '>
                            <SlotCounter value={[
                                <span>1</span>,
                                <span>2</span>,
                                <span>K</span>
                            ]} duration={2} />
                            <span className='font-normal text-[28px] tracking-widest'>
                                Happy Client
                            </span>
                        </li>

                        <li className='font-bold text-[56px] text-[#000] flex flex-col'>
                            <SlotCounter value={[
                                <span>1</span>,
                                <span>0</span>,
                                <span>K</span>
                            ]} duration={2} />
                            <span className='font-normal text-[28px] tracking-widest'>
                                Project Done
                            </span>
                        </li>

                        <li className='font-bold text-[56px] text-[#000] flex flex-col items-center'>
                            <div className='flex items-center gap-1'>
                                <SlotCounter value={[
                                    <span>1</span>,
                                    <span>0</span>,
                                    <span>0</span>
                                ]} duration={2} />
                                <span className='text-3xl'>%</span>
                            </div>
                            <span className='font-normal text-[28px] tracking-widest'>
                                Satisfied User
                            </span>
                        </li>

                        <li className='font-bold text-[56px] text-[#000] flex flex-col'>
                            <SlotCounter value={[
                                <span>0</span>,
                                <span>8</span>
                            ]} duration={2} />
                            <span className='font-normal text-[28px] tracking-widest'>
                                Operated Years
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Counter