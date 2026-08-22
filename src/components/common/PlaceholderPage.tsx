import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

interface PlaceholderPageProps {
  pageTitle: string;
}

function PlaceholderPage({ pageTitle }: PlaceholderPageProps) {
  return (
    <div className="min-h-[calc(100vh-4rem-10rem)] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy/10 mb-6">
          <Construction className="w-10 h-10 text-navy" />
        </div>
        <h1 className="text-3xl font-bold text-navy-dark mb-3">{siteContent.placeholder.title}</h1>
        <p className="text-lg text-gray-600 mb-2">{pageTitle}</p>
        <p className="text-base text-gray-500 mb-8">{siteContent.placeholder.message}</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
        >
          {siteContent.placeholder.backToHome}
        </Link>
      </div>
    </div>
  );
}

export default PlaceholderPage;
