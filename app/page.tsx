// app/page.tsx
import CityNewsSection from '@/components/citynews/CityNewsSection';
import Navbar from '@/components/citynews/Navbar';


export default function Home() {
  return (
    <>
      <Navbar />
      <CityNewsSection />
      {/* more sections */}
    </>
  );
}