import { demos } from '@/data/demos';
import { siteContent } from '@/data/siteContent';
import DemoCard from './DemoCard';

function DemoCardGrid() {
  return (
    <section id="demo-cards" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            {siteContent.demoCards.title}
          </h2>
          <p className="text-lg text-gray-600">{siteContent.demoCards.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {demos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DemoCardGrid;
