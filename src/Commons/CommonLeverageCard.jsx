import React from 'react'

const CommonLeverageCard = ({ CommonLeverageCardImage, CommonLeverageCardName, CommonLeverageCardInfo }) => {
    return (
        <>
            <ul className='pr-[20px] pl-[28px] py-[36px] shadow-[2px_2px_5px_#afc2e1] rounded-2xl relative mt-[30px] hover:translate-y-[-5px] hover:shadow-[inset_-2px_-2px_15px_#afc2e1,2px_2px_5px_#afc2e1] duration-300'>
                <li className='mb-5 flex items-center gap-6'>
                    <div className='w-[60px] h-[60px] flex justify-center items-center bg-[#0646accc] rounded-xl'>
                        <img loading='lazy' src={CommonLeverageCardImage} alt="card image" className='w-[25px]'/>
                    </div>
                    <h4 className='font-bold text-2xl text-[#000] leading-[24px] tracking-widest'>{CommonLeverageCardName}</h4>
                </li>
                <li className='lg:w-[362px]'>
                    <p className='font-medium text-xl text-[#555555] leading-[32px] tracking-widest'>{CommonLeverageCardInfo}</p>
                </li>
            </ul>
        </>
    )
}

export default CommonLeverageCard