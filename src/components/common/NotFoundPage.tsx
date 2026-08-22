import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { siteContent } from '@/data/siteContent';

function NotFoundPage() {
  return (
    <div className="min-h-[calc(100vh-4rem-10rem)] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-xl">
        <p className="text-7xl font-bold text-navy mb-4">404</p>
        <h1 className="text-3xl font-bold text-navy-dark mb-3">
          {siteContent.notFound.title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">{siteContent.notFound.message}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
        >
          <Home className="w-5 h-5" />
          {siteContent.notFound.backToHome}
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
