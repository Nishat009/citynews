// lib/fonts.ts
import { Roboto } from 'next/font/google';
import { PT_Serif } from 'next/font/google';
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // add the weights you need
  style: ['normal', 'italic'],
  display: 'swap', // prevents invisible text / FOUT
  variable: '--font-roboto', // optional: CSS variable name
});



// lib/fonts.ts


export const ptSerif = PT_Serif({
  subsets: ['latin'],           // add 'cyrillic' if you need Russian support
  weight: ['400', '700'],       // regular + bold — add 'italic' styles if needed
  style: ['normal', 'italic'],  // optional
  display: 'swap',              // prevents invisible text / FOUT
  variable: '--font-pt-serif',  // optional: CSS var for Tailwind
});

