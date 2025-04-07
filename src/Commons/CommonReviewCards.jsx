import React from 'react'
import { RiDoubleQuotesR } from "react-icons/ri"

const CommonReviewCards = ({ commonReviewHead, commonReviewInfo }) => {
    return (
        <>
            <ul class="w-full p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 cursor-grab active:cursor-grabbing">
                <li class="flex items-center gap-10 mb-4">
                    <img src="#" class="w-20 h-20 rounded-full bg-[#d2e8fd]" alt="Client" />
                    <div>
                        <h4 class="text-xl font-semibold text-gray-800">Anna Müller</h4>
                        <p class="text-lg text-gray-500">Founder, NordicTech</p>
                    </div>
                </li>
                <li class="h-[280px] px-4 pt-10 mt-10 rounded-lg text-gray-600 leading-relaxed flex flex-col bg-[#d2e8fd80] tracking-widest relative">
                    <span className='font-semibold text-[28px] mb-4 tracking-widest'>{commonReviewHead}</span>
                    {commonReviewInfo}
                    <span className='absolute text-4xl p-4 bg-[#3971ca] text-[#fff] rounded-2xl top-[-30px] right-6'>
                        <RiDoubleQuotesR/>
                    </span>
                </li>
            </ul>
        </>
    )
}

export default CommonReviewCards