import React from 'react';
import { opinionList } from '../data/cityNewsData';
import { roboto } from '@/lib/fonts';
import Link from 'next/link';

export default function OpinionSidebar() {
  return (
    <div className='bg-white p-5 mt-[30px]'>
      <h2 className={`text-base font-bold  mb-5border-b-2 border-gray-300  tracking-wide pb-2 text-gray-900 ${roboto.className}`}>
        Opinion
      </h2>
      <div className="w-16 h-0.5 -mt-0.5 bg-black"></div>
      <div className="space-y-[14px] mt-5">
        {opinionList.map((item) => (
          <Link
            key={item.id}
            href="#"
            className="block border-b border-[#eee] last:border-0 text-sm font-normal pb-2 tracking-tighter line-clamp-2"
          >
            ► {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}