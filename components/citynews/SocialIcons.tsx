// SocialIcons.tsx
"use client";
import React from "react";
import { Facebook, Twitter, Youtube, Rss } from "lucide-react";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Facebook className="w-5 h-5 text-blue-900" />
      </Link>
      <Link href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
        <Twitter className="w-5 h-5 text-black" />
      </Link>
      <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <Youtube className="w-5 h-5 text-red-800" />
      </Link>
      <Link href="/rss" target="_blank" rel="noopener noreferrer" aria-label="RSS">
        <Rss className="w-5 h-5 text-orange-500" />
      </Link>
    </div>
  );
}