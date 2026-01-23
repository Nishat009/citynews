'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

import SliderCard from './SliderCard';
import { topSliderNews } from '../data/cityNewsData';

export default function NewsSlider() {
  return (

    <div className='bg-white p-[15px]'>
      <div className="relative px-8">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        loopAdditionalSlides={topSliderNews.length}
        spaceBetween={24}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.news-next',
          prevEl: '.news-prev',
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-4"
      >
        {topSliderNews.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left */}
      <button className="news-prev absolute left-0 top-1/2 -translate-y-1/2 z-10
        h-full w-6 flex items-center justify-center
        bg-white border border-[#e0e0e0]">
        <ChevronLeft size={9} />
      </button>

      {/* Right */}
      <button className="news-next absolute right-0 top-1/2 -translate-y-1/2 z-10
        h-full w-6 flex items-center justify-center
        bg-white border border-[#e0e0e0]">
        <ChevronRight size={9} />
      </button>
    </div>
    </div>
  );
}
