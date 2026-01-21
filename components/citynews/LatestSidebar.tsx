// components/citynews/LatestSidebar.tsx
import React from 'react';
import LatestItem from './LatestItem';
import { latestNews } from '../data/cityNewsData';
// import { latestNews } from '@/data/cityNewsData';   // adjust path if needed

export default function LatestSidebar() {
  return (
    <div className='bg-white p-5'>
<h2 className="text-base font-bold border-b-2 border-gray-300  tracking-wide pb-2 text-gray-900">
  The Latest
</h2>
<div className="w-16 h-0.5 -mt-0.5 bg-black"></div>
      <div className="space-y-4 mt-5">
        {latestNews.map((item) => (
          <LatestItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}