// components/citynews/OpinionItem.tsx
import React from 'react';

type OpinionItemProps = { text: string };

export default function OpinionItem({ text }: OpinionItemProps) {
  return (
    <a href="#" className="block text-sm md:text-base font-medium hover:text-yellow-600 transition line-clamp-2">
      ► {text}
    </a>
  );
}