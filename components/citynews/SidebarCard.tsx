// components/citynews/SidebarCard.tsx
import { ptSerif, roboto } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type SidebarCardProps = {
  title: string;
  image: string;
  category: string;
  author: string;
  date: string;
  description: string;
};

export default function SidebarCard({ title, image, category, author, date, description }: SidebarCardProps) {
  return (
    <Link href="#" className="group block bg-white">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
        />
        <span className={`absolute top-3 left-3 text-[10px] font-bold px-1.5 py-0.5 bg-[#ffba08] text-white uppercase ${roboto.className}`}>
          {category}
        </span>
      </div>
     <div className='px-5 pt-5 pb-[25px]'>
       <h3 className="mt-4 text-base lg:text-lg font-semibold leading-tight line-clamp-2">
        {title}
      </h3>
      <p className={`mt-2 text-xs sm:text-sm text-gray-500 ${roboto.className}`}>
        by {author} • {date}
      </p>
      <p className={`text-sm font-serif my-[15px] text-[#666666] line-clamp-2 ${ptSerif.className}`}>
                  {description}
                </p>
     </div>
    </Link>
  );
}