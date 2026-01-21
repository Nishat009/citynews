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
      <div className="flex-shrink-0  overflow-hidden rounded">
        <Image
          src={image}
          alt={title}
          className="w-[100px] h-[76px] object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1">
        
        <h3 className="text-sm md:text-[15px] font-semibold leading-tight tracking-tighter">
          {title}
        </h3>
      </div>
    </a>
  );
}