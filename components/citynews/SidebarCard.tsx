// components/citynews/SidebarCard.tsx
import Image from 'next/image';
import React from 'react';

type SidebarCardProps = {
  title: string;
  image: string;
  category: string;
  author: string;
  date: string;
};

export default function SidebarCard({ title, image, category, author, date }: SidebarCardProps) {
  return (
    <a href="#" className="group block">
      <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <Image
          src={image}
          alt={title}
          className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-yellow-400 text-black uppercase rounded-sm">
          {category}
        </span>
      </div>
      <h3 className="mt-4 text-base lg:text-lg font-semibold leading-tight line-clamp-2 group-hover:text-yellow-600 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-xs sm:text-sm text-gray-500">
        by {author} • {date}
      </p>
    </a>
  );
}