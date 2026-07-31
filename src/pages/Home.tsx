import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import Roadmap from '@/sections/Roadmap';
import Steps from '@/sections/Steps';
import PlatformComparison from '@/sections/PlatformComparison';
import FAQ from '@/sections/FAQ';
import Tools from '@/sections/Tools';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Roadmap />
      <Steps />
      <PlatformComparison />
      <FAQ />
      <Tools />
      <Footer />
    </div>
  );
}
