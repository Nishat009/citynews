// components/citynews/CityNewsSection.tsx
import React from 'react';
import RightSidebar from './RightSidebar';
import FeaturedNewsCard from './FeaturedNewsCard';
import NewsSlider from './NewsSlider';
import OpinionSidebar from './OpinionSidebar';
import LatestSidebar from './LatestSidebar';
import SidebarDrawer from './SidebarDrawer';
// ... imports of child components

interface CityNewsSectionProps {
  // You can pass overrides or different data sets if you want
}

export default function CityNewsSection({ }: CityNewsSectionProps = {}) {
  return (
    <section className="py-8 md:py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative mb-4 lg:mb-0">
  <SidebarDrawer />  {/* button is inside here */}
</div>
        <div className="grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Left Sidebar – always visible on lg+ */}
          <div className="hidden lg:block space-y-10 lg:space-y-14 order-2 md:order-1">
            <LatestSidebar />
            <OpinionSidebar />
          </div>

          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <NewsSlider />
            <FeaturedNewsCard />
          </div>

          <div className="space-y-6 md:space-y-8 order-3 md:col-span-2 lg:col-span-1 lg:order-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}