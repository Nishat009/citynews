// app/page.tsx
import CityNewsSection from '@/components/citynews/CityNewsSection';
import Navbar from '@/components/citynews/Navbar';
import TopFeaturedCarousel from '@/components/citynews/TopFeatureCarousel';


export default function Home() {
  return (
    <>
      <Navbar />
      <TopFeaturedCarousel />
      <CityNewsSection />
      {/* more sections */}
    </>
  );
}