// components/citynews/SliderCard.tsx
import Image from 'next/image';
import React from 'react';

type SliderCardProps = {
  title: string;
  image: string;
  category?: string;   // optional now
};

export default function SliderCard({ title, image, category }: SliderCardProps) {
  return (
    <a href="#" className="block w-64 sm:w-72 md:w-80 flex-shrink-0 group">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-yellow-400 text-black uppercase rounded-sm">
            {category}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-sm md:text-base font-semibold leading-tight line-clamp-2 group-hover:text-yellow-700 transition-colors">
        {title}
      </h3>
    </a>
  );
}