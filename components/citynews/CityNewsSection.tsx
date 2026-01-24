import React from 'react';
import RightSidebar from './RightSidebar';
import FeaturedNewsCard from './FeaturedNewsCard';
import NewsSlider from './NewsSlider';
import OpinionSidebar from './OpinionSidebar';
import LatestSidebar from './LatestSidebar';
import HorizontalFeaturedCards from './HorizontalFeaturedCards';




export default function CityNewsSection() {
  return (
    <section className="py-8 md:py-10 lg:py-12 bg-[#F0F1F2]">
      <div className="max-w-[1380px] mx-auto px-4">
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 lg:order-2">
            <div>
              <NewsSlider />
              <FeaturedNewsCard />
            </div>
            <HorizontalFeaturedCards />
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-3 lg:order-1 hidden lg:block">
            <LatestSidebar />
            <OpinionSidebar />
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-3 lg:order-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}