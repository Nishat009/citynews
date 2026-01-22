// lib/fonts.ts
import { Roboto } from 'next/font/google';
import { PT_Serif } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], 
  style: ['normal', 'italic'],
  display: 'swap', 
  variable: '--font-roboto', 
});


export const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], 
  style: ['normal', 'italic'],
  display: 'swap',                      
  variable: '--font-roboto-condensed',  
});


export const ptSerif = PT_Serif({
  subsets: ['latin'],           
  weight: ['400', '700'],       
  style: ['normal', 'italic'],  
  display: 'swap',              
  variable: '--font-pt-serif',  
});

