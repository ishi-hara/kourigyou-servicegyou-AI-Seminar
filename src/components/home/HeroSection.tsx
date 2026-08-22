import { ChevronDown } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

const HERO_IMAGE_URL =
  'https://images.pexels.com/photos/12277251/pexels-photo-12277251.jpeg?auto=compress&cs=tinysrgb&w=1920';

function HeroSection() {
  const scrollToCards = () => {
    document.getElementById('demo-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
      />
      {/* Navy overlay ~70% opacity */}
      <div className="absolute inset-0 bg-navy-dark/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        <p className="text-xl md:text-2xl text-accent-light font-medium mb-4 tracking-wide">
          {siteContent.hero.subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {siteContent.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
          {siteContent.hero.description}
        </p>
        <button
          onClick={scrollToCards}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-white text-lg font-medium hover:bg-accent-dark transition-colors shadow-lg"
        >
          {siteContent.hero.cta}
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
