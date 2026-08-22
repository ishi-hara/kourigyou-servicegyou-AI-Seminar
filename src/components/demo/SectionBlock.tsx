import type { ReactNode } from 'react';

interface SectionBlockProps {
  title?: string;
  subtitle?: string;
  background?: 'white' | 'gray';
  children: ReactNode;
}

function SectionBlock({
  title,
  subtitle,
  background = 'white',
  children,
}: SectionBlockProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`py-10 md:py-12 ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base text-gray-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default SectionBlock;
