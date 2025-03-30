import React from 'react'

const CommonLeverageCard = ({CommonLeverageCardImage, CommonLeverageCardName, CommonLeverageCardInfo}) => {
    return (
        <>
            <ul className='px-[19px] pt-[72px] pb-[56px] shadow-[2px_2px_5px_#afc2e1] rounded-2xl flex flex-col items-center relative mt-[30px] hover:translate-y-[-5px] hover:shadow-[inset_-2px_-2px_15px_#afc2e1,2px_2px_5px_#afc2e1] duration-300'>
                <li className='w-[100px] h-[100px] flex justify-center items-center bg-[#0647ac] rounded-full absolute top-[-30px]'>
                    <img loading='lazy' src={CommonLeverageCardImage} alt="" />
                </li>
                <li className='mt-[23px] mb-5'>
                    <h4 className='font-bold text-[29px] text-[#000] leading-[24px]'>{CommonLeverageCardName}</h4>
                </li>
                <li className='w-[362px] text-center'>
                    <p className='font-normal text-xl text-[#555555] leading-[32px]'>{CommonLeverageCardInfo}</p>
                </li>
            </ul>
        </>
    )
}

export default CommonLeverageCard