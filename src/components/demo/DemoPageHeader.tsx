import type { LucideIcon } from 'lucide-react';

interface DemoPageHeaderProps {
  icon: LucideIcon;
  title: string;
  leadText: string;
}

function DemoPageHeader({ icon: Icon, title, leadText }: DemoPageHeaderProps) {
  return (
    <section className="bg-navy-dark py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
          <Icon className="w-8 h-8 text-accent-light" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
          {leadText}
        </p>
      </div>
    </section>
  );
}

export default DemoPageHeader;
