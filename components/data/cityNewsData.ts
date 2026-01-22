// data/cityNewsData.js
import topFeaturedImg1 from "@/public/image/top-feature-1.jpg";
import topFeaturedImg2 from "@/public/image/top-feature-2.jpg";
import topFeaturedImg3 from "@/public/image/top-feature-3.jpg";
import topFeaturedImg4 from "@/public/image/top-feature-4.jpg";
import topFeaturedImg5 from "@/public/image/top-feature-5.jpg";
import topFeaturedImg6 from "@/public/image/top-feature-6.jpg";

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

import horizontalImg1 from "@/public/image/horizontalImg-1.jpg";
import horizontalImg2 from "@/public/image/horizontalImg-2.jpg";
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
  title: "‘Election was rigged’ says opposition, police confirm three dead",
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
    description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
  },
  {
    id: 2,
    title: "Google Tracks Location Data Even When Users Turn Service Off",
    image: right2,
    category: "Lifestyle",
    author: "John Doe",
    date: "August 14, 2018",
    description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life..."
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

// Top Featured Carousel (5–6 large items)
export const topFeaturedCarousel = [
  {
    id: 1,
    title: "Jokowi, Prabowo could buy more time in VP selection",
    excerpt: "Short description or none",
    image: topFeaturedImg1, // large image placeholder
    category: "Politics",
    date: "AUGUST 10, 2018",
  },
  {
    id: 2,
    title: "Annual open water swim returns to Western Australia in February",
    image: topFeaturedImg2,
    category: "Sports",
    date: "AUGUST 10, 2018",
  },
  {
    id: 3,
    title: "The Sacred Balinese 'Fire Horse' Dance: Sanghyang Jaran Dance",
    image: topFeaturedImg3,
    category: "Culture",
    date: "FEBRUARY 17, 2020",
  },
  {
    id: 4,
    title: "A Digital Media Startup Growing Up With Millennial Women",
    image: topFeaturedImg4,
    category: "Lifestyle",
    date: "AUGUST 10, 2018",
  },
  {
    id: 5,
    title: "China To Build Indonesia's Longest Bridge In North Kalimantan",
    image: topFeaturedImg5,
    category: "Business",
    date: "AUGUST 8, 2018",
  },
  // Optional 6th item
  {
    id: 6,
    title: "China’s Peng banned and fined for Wimbledon corruption attempt",
    image: topFeaturedImg6,
    category: "Sports",
    date: "Auguest 9, 2018",
  },
];

export const horizontalFeaturedCards = [
  {
    id: 1,
    title: "Grab tackles Jakarta's odd-even license plate policy with special algorithm",
    image: horizontalImg1, // or your own path
    category: "BUSINESS",
    date: "February 17, 2020",
  },
  {
    id: 2,
    title: "Jokowi supporters try to prevent anti-Jokowi activist from entering Batam",
    image: horizontalImg2,
    category: "POLITICS",
    date: "August 10, 2018",
  },
];