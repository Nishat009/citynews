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
        <div className="grid gap-6 lg:gap-8 grid-cols-12">
          {/* Left Sidebar – always visible on lg+ */}
          <div className=" col-span-3">
            <LatestSidebar />
            <OpinionSidebar />
          </div>

          <div className="col-span-6">
            <div>
              <NewsSlider />
              <FeaturedNewsCard />
            </div>
            <HorizontalFeaturedCards />
          </div>

          <div className="col-span-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}