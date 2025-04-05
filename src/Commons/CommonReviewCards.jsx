import React from 'react'

const CommonReviewCards = ({commonReviewHead,commonReviewInfo}) => {
    return (
        <>
            <ul className='h-[80%] px-[30px] pt-[48px] pb-[23px] rounded-2xl text-center shadow-[2px_2px_8px_#000] hover:bg-[#d2e8fd] hover:translate-y-[-5px] duration-200 cursor-grab active:cursor-grabbing'>
                <li className='w-[80px] h-[80px] m-auto bg-[#f0f0f0] rounded-full'>
                    <img src="#" alt="client_image" />
                </li>

                <li className='my-6 font-bold text-3xl text-[#484A61] leading-[30px] tracking-widest'>
                    {commonReviewHead}
                </li>

                <li className='font-medium text-[16px] xl:text-lg text-[#484A61] 2xl:leading-[32px] tracking-widest'>
                    {commonReviewInfo}
                </li>
            </ul>
        </>
    )
}

export default CommonReviewCards