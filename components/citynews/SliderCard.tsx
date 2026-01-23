// components/citynews/SliderCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type SliderCardProps = {
  title: string;
  image: string;
  category?: string;   // optional now
};

export default function SliderCard({ title, image, category }: SliderCardProps) {
  return (
    <Link href="#" className=" W-[150px] flex gap-3 group">
      <div className="rounded w-[55px] h-[55px] gap-3">
        <Image
          src={image}
          alt={title}
          className="!w-[55px] !h-[55px] rounded object-cover"
        />
        
      </div>
      <h3 className="text-xs font-normal tracking-tighter w-[93px] leading-tight">
        {title}
      </h3>
    </Link>
  );
}