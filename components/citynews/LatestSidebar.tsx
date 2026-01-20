// components/citynews/LatestSidebar.tsx
import React from 'react';
import LatestItem from './LatestItem';
import { latestNews } from '../data/cityNewsData';
// import { latestNews } from '@/data/cityNewsData';   // adjust path if needed

export default function LatestSidebar() {
  return (
    <div>
      <h2 className="text-lg font-bold uppercase tracking-wide mb-4 border-b border-gray-300 pb-2">
        The Latest
      </h2>
      <div className="space-y-4">
        {latestNews.map((item) => (
          <LatestItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}