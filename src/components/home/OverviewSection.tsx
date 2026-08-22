import { siteContent } from '@/data/siteContent';

function OverviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-dark text-center mb-12">
          {siteContent.overview.title}
        </h2>
        <div className="space-y-6">
          {siteContent.overview.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg leading-relaxed text-gray-700 ${
                paragraph.startsWith('※')
                  ? 'text-sm text-gray-500 border-l-4 border-accent pl-4 py-2 bg-orange-50/50 rounded-r'
                  : ''
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
