// components/citynews/LatestItem.tsx  (unchanged — already accepts props)
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type LatestItemProps = {
  title: string;
  image: string;
  category: string;
};

export default function LatestItem({ title, image, category }: LatestItemProps) {
  return (
    <Link href="#" className="group flex items-start gap-3 hover:opacity-90 transition">
      <div className="flex-shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="md:w-[70px] md:h-[56px] lg:w-[100px] lg:h-[76px]"
        />
      </div>
      <div className="flex-1">
        
        <h3 className="text-sm md:text-[15px] font-semibold leading-tight tracking-tighter">
          {title}
        </h3>
      </div>
    </Link>
  );
}