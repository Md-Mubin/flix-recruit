import React from 'react'

const CommonReviewCards = ({commonReviewHead,commonReviewInfo}) => {
    return (
        <>
            <ul className='h-[350px] px-[30px] pt-[48px] pb-[23px] rounded-2xl text-center shadow-[2px_2px_8px_#000] hover:bg-[#d2e8fd] hover:translate-y-[-5px] duration-200'>
                <li className='w-[80px] h-[80px] m-auto bg-[#f0f0f0] rounded-full'>
                    <img src="#" alt="client_image" />
                </li>

                <li className='my-6 font-bold text-[34px] text-[#484A61] leading-[30px]'>
                    {commonReviewHead}
                </li>

                <li className='font-normal text-xl text-[#484A61] leading-[42px]'>
                    {commonReviewInfo}
                </li>
            </ul>
        </>
    )
}

export default CommonReviewCards