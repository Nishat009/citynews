// components/citynews/RightSidebar.tsx
import React from 'react';
import SidebarCard from './SidebarCard';
import { rightSidebarNews } from '../data/cityNewsData';

export default function RightSidebar() {
  return (
    <div className="space-y-6 lg:space-y-8">
      {rightSidebarNews.map((item) => (
        <SidebarCard key={item.id} {...item} />
      ))}
    </div>
  );
}