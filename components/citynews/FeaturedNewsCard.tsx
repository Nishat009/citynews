import React from 'react';
import { featuredNews } from '../data/cityNewsData';
import Image from 'next/image';
import { Clock9 } from 'lucide-react';
import { ptSerif, roboto } from '@/lib/fonts';
import Link from 'next/link';

export default function FeaturedNewsCard() {
  const { title, image, category, author, date, excerpt } = featuredNews;

  return (
    <article className="group relative mt-8 h-[36rem] bg-white">
      <Link href="#" className="block overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] object-cover "
        />
        <div className="absolute lg:z-[9999] top-68 left-0 right-0 m-5 px-[30px] pt-[15px] pb-5 text-black bg-white">
          <span className={`text-[11px] font-normal uppercase  text-[#a0a0a0] leading-normal text-center hover:text-black ${roboto.className}`}>
            {category}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold leading-normal mb-3 line-clamp-3 tracking-tight">
            {title}
          </h2>

          <div className={`text-[11px] opacity-90 flex items-center gap-0.5 ${ptSerif.className}`}>
            <span className={`italic text-[#a0a0a0] font-[11px]   ${ptSerif.className}`}>by </span> <span className={`text-black font-bold ${roboto.className} `}>{author}</span> <span className='italic text-[#a0a0a0]'> and 1 others</span>
            <span className={`flex italic text-[#a0a0a0] font-[11px]   ${ptSerif.className}`}><Clock9 className={`w-2.5 h-2.5 mt-1 text-[#a0a0a0] ml-2 mr-0.5 ${ptSerif.className}`} /> {date}</span>
            <span className='text-[#a0a0a0] ml-1.5'>🗨 0</span>
          </div>
          <p className={`text-sm font-serif my-[15px] text-[#666666] line-clamp-2 ${ptSerif.className}`}>
            {excerpt}
          </p>
          <Link href="#" className={`mt-[15px] text-[11px]  px-[18px] py-1.5 shadow uppercase hover:text-white hover:bg-black transition ${roboto.className} `}>Read more</Link>
        </div>
      </Link>
    </article>
  );
}