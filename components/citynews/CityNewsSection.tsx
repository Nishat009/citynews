// components/citynews/CityNewsSection.tsx
import React from 'react';
import RightSidebar from './RightSidebar';
import FeaturedNewsCard from './FeaturedNewsCard';
import NewsSlider from './NewsSlider';
import OpinionSidebar from './OpinionSidebar';
import LatestSidebar from './LatestSidebar';
import SidebarDrawer from './SidebarDrawer';
import HorizontalFeaturedCards from './HorizontalFeaturedCards';
// ... imports of child components

interface CityNewsSectionProps {
  // You can pass overrides or different data sets if you want
}

export default function CityNewsSection({ }: CityNewsSectionProps = {}) {
  return (
    <section className="py-8 md:py-10 lg:py-12 bg-[#F0F1F2]">
      <div className="max-w-[1380px] mx-auto px-4">
        <div className="relative mb-4 lg:mb-0">
          <SidebarDrawer />  {/* button is inside here */}
        </div>
       <div className="grid grid-cols-12 gap-6 lg:gap-8">
  
  {/* MAIN CONTENT — goes FIRST on mobile */}
  <div className="col-span-12 md:col-span-7 lg:col-span-6 order-1">
    <div>
      <NewsSlider />
      <FeaturedNewsCard />
    </div>

    <HorizontalFeaturedCards />
  </div>

  {/* LEFT SIDEBAR — goes DOWN on mobile */}
  <div className="col-span-12 md:col-span-5 lg:col-span-3 order-2 lg:order-1">
    <LatestSidebar />
    <OpinionSidebar />
  </div>

  {/* RIGHT SIDEBAR — always last */}
  <div className="col-span-12 md:col-span-5 lg:col-span-3 order-3">
    <RightSidebar />
  </div>

</div>

      </div>
    </section>
  );
}