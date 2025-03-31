"use client"
import CommonReviewCards from '@/Commons/CommonReviewCards'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ClientPriority = () => {
    return (
        <>
            <section className='pb-[156px]'>
                <div className='lg:maskImage'>
                    <ul className='text-center'>
                        <li>
                            <h2 className='font-bold text-[56px] leading-[72px] text-[#000]'>Our Clients' Satisfaction is Our Top Priority</h2>
                        </li>
                        <li>
                            <p className='pt-[30px] font-normal text-[22px] text-[#555555] leading-[35px]'>We have a reputation for helping clients around the world find success on their most important projects.</p>
                        </li>
                    </ul>

                    <div className='mt-10'>
                        <Swiper slidesPerView={3} grabCursor={true} spaceBetween={30} centeredSlides={true} pagination={{dynamicBullets : true}} loop={true} modules={[Pagination]} className='swiper'>
                            <SwiperSlide>
                                <CommonReviewCards commonReviewHead={"Partnership with FlixRecruit"} commonReviewInfo={"I've been particularly impressed with the platform's ability to match me with freelancers who have the specific skills and experience we need. The quality of talent is exceptional"} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CommonReviewCards commonReviewHead={"Great Plattform for Finding Talents"} commonReviewInfo={"FlixRecruit delivered the talent and expertise needed to launch a brand-new fan engagement platform."} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CommonReviewCards commonReviewHead={"FLixRecruit is my go-to source BCGX"} commonReviewInfo={"FlixRecruit is my go-to source to find high-quality talent I can't find elsewhere. I've been very impressed with the breadth and depth of talent they have been able to deliver."} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CommonReviewCards commonReviewHead={"Partnership with FlixRecruit"} commonReviewInfo={"I've been particularly impressed with the platform's ability to match me with freelancers who have the specific skills and experience we need. The quality of talent is exceptional"} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CommonReviewCards commonReviewHead={"Great Plattform for Finding Talents"} commonReviewInfo={"FlixRecruit delivered the talent and expertise needed to launch a brand-new fan engagement platform."} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CommonReviewCards commonReviewHead={"FLixRecruit is my go-to source BCGX"} commonReviewInfo={"FlixRecruit is my go-to source to find high-quality talent I can't find elsewhere. I've been very impressed with the breadth and depth of talent they have been able to deliver."} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClientPriority