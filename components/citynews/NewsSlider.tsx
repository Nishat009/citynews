// components/citynews/NewsSlider.tsx
import React from 'react';
import SliderCard from './SliderCard';
import { topSliderNews } from '../data/cityNewsData';
// import { topSliderNews } from '@/data/cityNewsData';

export default function NewsSlider() {
  return (
    <div className="overflow-x-auto bg-white pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <div className="flex gap-4 md:gap-6 min-w-[172px] p-4">
        {topSliderNews.map((item) => (
          <SliderCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}