// components/citynews/HorizontalFeaturedCards.tsx
import React from 'react';
import { horizontalFeaturedCards } from '../data/cityNewsData';

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
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

            {/* Category badge - bottom left */}
            <span
              className={`
                absolute bottom-5 left-5 px-4 py-1.5 text-xs md:text-sm font-bold uppercase rounded-sm shadow-md
                ${card.category === 'BUSINESS' ? 'bg-blue-600 text-white' : ''}
                ${card.category === 'POLITICS' ? 'bg-red-600 text-white' : ''}
                ${!['BUSINESS', 'POLITICS'].includes(card.category) ? 'bg-gray-800 text-white' : ''}
              `}
            >
              {card.category}
            </span>
          </div>

          {/* Title & date */}
          <div className="p-5 md:p-6 bg-white">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight line-clamp-2 text-gray-900 group-hover:text-yellow-700 transition-colors">
              {card.title}
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              © {card.date}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}