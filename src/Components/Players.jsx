"use client"
import CommonLeverageCard from '@/Commons/CommonLeverageCard'
import React, { useEffect } from 'react'
import "aos/dist/aos.css";

const Players = () => {

  useEffect(()=>{
    import("aos").then((AOS) => AOS.init({once : true, offset : 200}));
  },[])

  return (
    <>
      <section className='pt-[85px] pb-[140px]'>
        <div className="container">
          <ul>
            <li className='w-[1004px] m-auto text-center'>
              <h2 className='font-bold text-[56px] leading-[72px] text-[#000]'>Leverage A Players</h2>
              <p className='pt-[30px] font-normal text-[22px] text-[#555555] leading-[35px]'>Our global network of Freelance recruiters connects you with high-performer employers to drive your company's success across various industries:</p>
            </li>
          </ul>

          <div className='flex flex-wrap gap-5 mt-[42px] justify-center'>
            <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100">
              <CommonLeverageCard CommonLeverageCardImage={"/images/developer_icon.png"} CommonLeverageCardName={"Developers"} CommonLeverageCardInfo={"Hire experienced software engineers, developers, and architects skilled in a wide range of technologies"} />
            </div>

            <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200">
              <CommonLeverageCard CommonLeverageCardImage={"/images/medicine_icon.png"} CommonLeverageCardName={"Medicine"} CommonLeverageCardInfo={"Connect with top medical professionals, including healthcare consultants and researchers"} />
            </div>

            <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300">
              <CommonLeverageCard CommonLeverageCardImage={"/images/engineering_icon.png"} CommonLeverageCardName={"Engineering"} CommonLeverageCardInfo={"Find experts in engineering, product development, and innovative solutions for your business needs"} />
            </div>

            <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="400">
              <CommonLeverageCard CommonLeverageCardImage={"/images/hr_icon.png"} CommonLeverageCardName={"HR"} CommonLeverageCardInfo={"Get access to skilled HR professionals specializing in recruitment and talent management"} />
            </div>

            <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="500">
              <CommonLeverageCard CommonLeverageCardImage={"/images/sales_icon.png"} CommonLeverageCardName={"Sales"} CommonLeverageCardInfo={"Hire top-performing sales professionals with expertise in business development and customer acquisition"} />
            </div>

            <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="600">
              <CommonLeverageCard CommonLeverageCardImage={"/images/finance_icon.png"} CommonLeverageCardName={"Finance"} CommonLeverageCardInfo={"Get access to financial analysts, CFO consultants, and experts in valuation, startup funding, and financial modeling"} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Players