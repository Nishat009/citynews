// components/citynews/TopFeaturedCarousel.tsx
"use client"
import React from 'react';
// import { topFeaturedCarousel } from '@/data/cityNewsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { topFeaturedCarousel } from '../data/cityNewsData';
import Image from 'next/image';

export default function TopFeaturedCarousel() {
    // For simplicity: horizontal scroll with snap + arrows
    // You can later use swiper.js or embla-carousel for auto-slide / infinite loop

    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative bg-gray-900 text-white mt-10 group/carousel">
            {/* Full-width container */}
            <div className="relative overflow-hidden">
                {/* Scrollable container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-hidden snap-x snap-mandatory scrollbar-hide gap-0"
                >
                    {topFeaturedCarousel.map((item) => (
                        <a key={item.id}
                            href="#"
                            className="flex-shrink-0 
                                    w-full            
                                    sm:w-1/2           
                                    md:w-1/3          
                                    lg:w-[calc(20%-1rem)]
                                    xl:w-[calc(21.4%-1rem)] 
                                    2xl:w-[calc(21.666%-1rem)]
                                    snap-start
                                    relative
                                    group"

                        >

                            {/* Large image */}
                            <div className="relative aspect-[4/3] md:aspect-[6/4] overflow-none">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />

                                {/* Category badge - bottom left overlay */}

                            </div>

                            {/* Title + date below image */}
                            <div className="p-4 md:p-5 bg-white border-l border-b border-t border-[#eee]">
                                <h5 className="text-[11px] tracking-[-0.05em] font-normal uppercase  text-[#a0a0a0] leading-normal text-center">
                                    {item.category}
                                </h5>
                                <h3 className="text-base tracking-[-0.05em] md:text-lg lg:text-xl font-bold text-center mt-[15px] mb-2.5 leading-tight  text-[#212121] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-[11px] text-[#a0a0a0] text-center">
                                    {item.date}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Navigation Arrows - positioned on sides */}
                <button
                    onClick={scrollLeft}
                    className="absolute  cursor-pointer left-2 opacity-0 group-hover/carousel:pointer-events-auto
        group-hover/carousel:opacity-90 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 shadow-md text-[#212121] transition"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={scrollRight}
                    className=" absolute cursor-pointer opacity-0 group-hover/carousel:pointer-events-auto
        group-hover/carousel:opacity-90 right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 shadow-md text-[#212121] transition"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}