// components/citynews/OpinionItem.tsx
import Link from 'next/link';
import React from 'react';

type OpinionItemProps = { text: string };

export default function OpinionItem({ text }: OpinionItemProps) {
  return (
    <Link href="#" className="block  text-sm md:text-base font-medium transition line-clamp-2">
      ► {text}
    </Link>
  );
}