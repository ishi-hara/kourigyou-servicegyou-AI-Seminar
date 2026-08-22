import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Demo } from '@/types/demo';
import { siteContent } from '@/data/siteContent';

function DemoCard({ demo }: { demo: Demo }) {
  const Icon = demo.icon;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="p-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
          <Icon className="w-7 h-7 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-navy-dark mb-3">{demo.fullLabel}</h3>
        <p className="text-base text-gray-600 leading-relaxed mb-6">{demo.description}</p>
        <Link
          to={demo.path}
          className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors group"
        >
          {siteContent.demoCards.cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export default DemoCard;
