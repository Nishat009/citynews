// components/citynews/HorizontalFeaturedCards.tsx
import React from 'react';
import { horizontalFeaturedCards } from '../data/cityNewsData';
import Image from 'next/image';
import { ptSerif, roboto } from '@/lib/fonts';
import { Clock9 } from 'lucide-react';

export default function HorizontalFeaturedCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      {horizontalFeaturedCards.map((card) => (
        <a
          key={card.id}
          href="#"
          className="group block relative overflow-hidden shadow-md hover:shadow-2xl"
        >
          {/* Image with overlay */}
          <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

            {/* Category badge - bottom left */}
            <span
              className={`
                absolute bottom-0 left-0 right-0 w-max mx-auto text-[10px] font-bold px-1.5 py-0.5  uppercase ${roboto.className}
                ${card.category === 'BUSINESS' ? 'bg-[#2979ff] text-white' : ''}
                ${card.category === 'POLITICS' ? 'bg-[#d32f2f] text-white' : ''}
                ${!['BUSINESS', 'POLITICS'].includes(card.category) ? 'bg-gray-800 text-white' : ''}
              `}
            >
              {card.category}
            </span>
          </div>
          <div className="p-5 md:p-6 bg-white">
            <h3 className="text-base font-bold line-clamp-2 text-black">
              {card.title}
            </h3>
            {/* <p className="flex justify-center items-center mt-2.5 text-[#a0a0a0] text-[11px] font-regular mx-auto">
              © {card.date}
            </p> */}
            <span className={`flex justify-center items-center mt-2.5 text-[#a0a0a0] text-xs ${ptSerif.className}`}><Clock9 className={`w-2.5 h-2.5 mt-0.5 text-[#a0a0a0] ml-2 mr-0.5 ${ptSerif.className}`} /> {card.date}</span>
          </div>
        </a>
      ))}
    </div>
  );
}