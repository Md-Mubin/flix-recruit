import React from 'react'
import SlotCounter from "react-slot-counter"

const Counter = () => {
    return (
        <>
            <section className='py-10 bg-[#f3f4f8]'>
                <div className="container">
                    <ul className='text-center flex items-center justify-between'>
                        <li className='font-bold text-[56px] text-[#000] flex flex-col'>
                            <SlotCounter value={[
                                <span>1</span>,
                                <span>2</span>,
                                <span>K</span>
                            ]} duration={2}/>
                            <span className='font-normal text-[36px]'>
                                Happy Client
                            </span>
                        </li>

                        <li className='font-bold text-[56px] text-[#000] flex flex-col'>
                            <SlotCounter value={[
                                <span>1</span>,
                                <span>0</span>,
                                <span>K</span>
                            ]} duration={2}/>
                            <span className='font-normal text-[36px]'>
                                Project Done
                            </span>
                        </li>

                        <li className='font-bold text-[56px] text-[#000] flex flex-col'>
                            <SlotCounter value={[
                                <span>1</span>,
                                <span>2</span>,
                                <span>0</span>
                            ]} duration={2}/>
                            <span className='font-normal text-[36px]'>
                                Gets Awards
                            </span>
                        </li>

                        <li className='font-bold text-[56px] text-[#000] flex flex-col'>
                            <SlotCounter value={[
                                <span>0</span>,
                                <span>8</span>
                            ]} duration={2}/>
                            <span className='font-normal text-[36px]'>
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