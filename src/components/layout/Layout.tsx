import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalHeader from './GlobalHeader';
import Footer from './Footer';

function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <GlobalHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
