// data/cityNewsData.js

import latest1 from "@/public/image/latest-1.jpg";
import latest2 from "@/public/image/latest-2.jpg";
import latest3 from "@/public/image/latest-3.jpg";
import latest4 from "@/public/image/latest-4.jpg";
import latest5 from "@/public/image/latest-5.jpg";

import slider1 from "@/public/image/slider-1.jpg";
import slider2 from "@/public/image/slider-2.jpg";
import slider3 from "@/public/image/slider-3.jpg";

import featuredImg from "@/public/image/feature-1.jpg";

import right1 from "@/public/image/right-1.jpg";
import right2 from "@/public/image/right-2.jpg";


// LEFT SIDEBAR — "The Latest"
export const latestNews = [
  {
    id: 1,
    title: "Unconventional Workouts That Torch Fat And Sculpt Muscle",
    image: latest1,
    category: "Fitness",
  },
  {
    id: 2,
    title: "Millions of Indigenous People May Lose Voting Rights: Alliance",
    image: latest2,
    category: "Politics",
  },
  {
    id: 3,
    title: "Crismonita Dwi Putri, RI’s Track Cycling Athlete for Asian Games",
    image: latest3,
    category: "Sports",
  },
  {
    id: 4,
    title: "President Joko Widodo Refuses to Sign MD3 Law",
    image: latest4,
    category: "Politics",
  },
  {
    id: 5,
    title: "Garuda Operates Larger Planes for Jakarta–Palembang Route",
    image: latest5,
    category: "Business",
  },
];


// LEFT SIDEBAR — "Opinion"
export const opinionList = [
  { id: 1, title: "Tour Showcases Shared Art History of Indonesia and Singapore" },
  { id: 2, title: "Finland Has an Education System the World Should Learn From" },
  { id: 3, title: "Women in Politics: Urgency of Quota System for Regional Elections" },
  { id: 4, title: "China’s Peng Banned and Fined for Wimbledon Corruption Attempt" },
  { id: 5, title: "Democratic Party Politician Calls Prabowo 'Cardboard General'" },
];


// TOP SLIDER
export const topSliderNews = [
  {
    id: 1,
    title: "The Chinese Smartphone Upstarts Taking on Apple and Samsung",
    image: slider1,
    category: "Tech",
  },
  {
    id: 2,
    title: "Presidential Train Now Available for Jakarta to Bandung Travel",
    image: slider2,
    category: "Travel",
  },
  {
    id: 3,
    title: "A Digital Media Startup Growing Up With Millennial Women",
    image: slider3,
    category: "Business",
  },
];


// MAIN FEATURED NEWS
export const featuredNews = {
  id: 1,
  title: "‘Election Was Rigged’ Says Opposition, Police Confirm Three Dead",
  image: featuredImg,
  category: "Politics",
  author: "John Doe",
  date: "February 17, 2020",
  excerpt:
    "When we get out of the glass bottle of our ego and when we escape like the squirrels in the wheel...",
};


// RIGHT SIDEBAR CARDS
export const rightSidebarNews = [
  {
    id: 1,
    title: "Democratic Party Politician Calls Prabowo 'Cardboard General'",
    image: right1,
    category: "Opinion",
    author: "John Doe",
    date: "August 10, 2018",
  },
  {
    id: 2,
    title: "Google Tracks Location Data Even When Users Turn Service Off",
    image: right2,
    category: "Lifestyle",
    author: "John Doe",
    date: "August 14, 2018",
  },
];
export const navItems = [
  {
    label: 'HOME',
    href: '/',
    submenu: [
      { label: 'Homepage Layout 1', href: '/layouts/1' },
      { label: 'Homepage Layout 2', href: '/layouts/2' },
      { label: 'Homepage Layout 3', href: '/layouts/3' },
    ],
  },
  { label: 'NEWS', href: '/news' },
  { label: 'POLITICS', href: '/politics' },
  { label: 'BUSINESS', href: '/business' },
  { label: 'NATIONAL', href: '/national' },
  { label: 'CULTURE', href: '/culture' },
  { label: 'OPINION', href: '/opinion' },
  { label: 'LIFESTYLE', href: '/lifestyle' },
  { label: 'SPORTS', href: '/sports' },
];