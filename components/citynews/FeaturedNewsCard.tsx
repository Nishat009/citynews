// components/citynews/FeaturedNewsCard.tsx
import React from 'react';
import { featuredNews } from '../data/cityNewsData';
import Image from 'next/image';
// import { featuredNews } from '@/data/cityNewsData';

export default function FeaturedNewsCard() {
  const { title, image, category, author, date, excerpt } = featuredNews;

  return (
    <article className="group">
      <a href="#" className="block relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
        <Image
          src={image}
          alt={title}
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 text-white">
          <span className="inline-block px-3 py-1.5 text-xs sm:text-sm font-bold bg-yellow-400 text-black uppercase tracking-wide mb-3 rounded-sm">
            {category}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-3 line-clamp-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-200 line-clamp-2 mb-4">
            {excerpt}
          </p>
          <div className="text-xs sm:text-sm opacity-90 font-medium">
            by {author} • {date}
          </div>
        </div>
      </a>
    </article>
  );
}