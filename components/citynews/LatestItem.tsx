// components/citynews/LatestItem.tsx  (unchanged — already accepts props)
import Image from 'next/image';
import React from 'react';

type LatestItemProps = {
  title: string;
  image: string;
  category: string;
};

export default function LatestItem({ title, image, category }: LatestItemProps) {
  return (
    <a href="#" className="group flex items-start gap-3 hover:opacity-90 transition">
      <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1">
        <span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-400 text-black uppercase mb-1">
          {category}
        </span>
        <h3 className="text-sm md:text-base font-semibold leading-tight line-clamp-2">
          {title}
        </h3>
      </div>
    </a>
  );
}