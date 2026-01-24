"use client"

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { topFeaturedCarousel } from '../data/cityNewsData';
import Image from 'next/image';
import { roboto } from '@/lib/fonts';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function TopFeaturedCarousel() {
    return (
        <div className="relative bg-white text-white group/carousel">
            {/* Full-width container */}
            <div className="relative overflow-hidden">

                <Swiper
                    modules={[Navigation]}
                    loop
                    navigation={{
                        nextEl: '.featured-next',
                        prevEl: '.featured-prev',
                    }}
                    slidesPerView="auto"
                    className="flex"
                >
                    {topFeaturedCarousel.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="!w-full sm:!w-1/2 md:!w-1/3 
                                       lg:!w-[calc(20%-1rem)]
                                       xl:!w-[calc(21.4%-1rem)] 
                                       2xl:!w-[calc(21.666%-1rem)]
                                       relative group"
                        >
                            <Link
                                href="#"
                                className="flex-shrink-0 snap-start relative group block"
                            >
                                {/* Large image */}
                                <div className="relative aspect-[4/3] md:aspect-[6/4] overflow-none">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />
                                </div>

                                {/* Title + date below image */}
                                <div className="p-4 md:p-5 bg-white border-l lg:border-b border-t border-[#eee]">
                                    <h5
                                        className={`text-[11px] font-normal uppercase text-[#a0a0a0] leading-normal text-center ${roboto.className}`}
                                    >
                                        {item.category}
                                    </h5>

                                    <h3
                                        className="text-base tracking-[-0.05em] md:text-lg lg:text-xl font-bold text-center mt-[15px] mb-2.5 leading-tight text-[#212121] transition-colors"
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`mt-2 text-[11px] text-[#a0a0a0] text-center ${roboto.className}`}
                                    >
                                        {item.date}
                                    </p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Arrows - SAME DESIGN */}
                <button
                    className="featured-prev absolute cursor-pointer left-2 opacity-0 
                    group-hover/carousel:pointer-events-auto
                    group-hover/carousel:opacity-90 md:left-6 
                    top-1/2 -translate-y-1/2 z-10 
                    bg-white/80 hover:bg-white p-3 shadow-md 
                    text-[#212121] transition"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    className="featured-next absolute cursor-pointer opacity-0 
                    group-hover/carousel:pointer-events-auto
                    group-hover/carousel:opacity-90 right-2 md:right-6 
                    top-1/2 -translate-y-1/2 z-10 
                    bg-white/80 hover:bg-white p-3 shadow-md 
                    text-[#212121] transition"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
