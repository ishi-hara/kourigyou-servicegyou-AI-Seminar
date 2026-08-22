import { siteContent } from '@/data/siteContent';

function Footer() {
  return (
    <footer className="bg-navy-darker text-white/70 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm leading-relaxed mb-4">{siteContent.footer.disclaimer}</p>
        <p className="text-sm text-white/80 mb-2">
          <a
            href={siteContent.footer.contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            {siteContent.footer.contact.websiteLabel}
          </a>
          {'　'}
          <a
            href={`mailto:${siteContent.footer.contact.email}`}
            className="hover:text-accent"
          >
            {siteContent.footer.contact.email}
          </a>
        </p>
        <p className="text-sm text-white/50">{siteContent.footer.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
