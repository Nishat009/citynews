// components/citynews/OpinionSidebar.tsx
import React from 'react';
import { opinionList } from '../data/cityNewsData';
// import { opinionList } from '@/data/cityNewsData';

export default function OpinionSidebar() {
  return (
    <div>
      <h2 className="text-lg font-bold uppercase tracking-wide mb-4 border-b border-gray-300 pb-2">
        Opinion
      </h2>
      <div className="space-y-3">
        {opinionList.map((item) => (
          <a
            key={item.id}
            href="#"
            className="block text-sm md:text-base font-medium leading-relaxed hover:text-yellow-700 transition line-clamp-2"
          >
            ► {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}