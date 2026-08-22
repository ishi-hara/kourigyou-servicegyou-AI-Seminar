import HeroSection from '@/components/home/HeroSection';
import OverviewSection from '@/components/home/OverviewSection';
import DemoCardGrid from '@/components/home/DemoCardGrid';
import DownloadSection from '@/components/home/DownloadSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <DemoCardGrid />
      <DownloadSection />
    </>
  );
}

export default HomePage;
