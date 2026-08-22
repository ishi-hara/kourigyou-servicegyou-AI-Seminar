import { Download } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

function DownloadSection() {
  const { filePath, buttonLabel, note } = siteContent.download;

  return (
    <section className="py-20 bg-navy-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
          <Download className="w-8 h-8 text-accent-light" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {siteContent.download.title}
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          {siteContent.download.description}
        </p>
        <a
          href={filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-accent text-white text-lg font-medium hover:bg-accent-dark transition-colors shadow-lg"
        >
          <Download className="w-5 h-5" />
          {buttonLabel}
        </a>
        <p className="text-sm text-white/60 mt-4">{note}</p>
      </div>
    </section>
  );
}

export default DownloadSection;
