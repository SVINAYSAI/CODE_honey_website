import { Instagram, Youtube } from 'lucide-react';
import { HoneycombBg } from '../ui/HoneycombBg';

const footerLinks = {
  company: [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Ambassadors', href: '#ambassadors' },
  ],
  account: [
    { label: 'Cart', href: '#' },
    { label: 'My Account', href: '#' },
    { label: 'Track Order', href: '#' },
    { label: 'Wholesale', href: '#' },
  ],
  policies: [
    { label: 'Refund Policy', href: '#' },
    { label: 'Shipping Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-dark-mid pt-16 pb-8">
      <HoneycombBg opacity={0.03} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-1 mb-4">
              <span className="font-accent text-3xl tracking-wider text-text-warm">
                CODE
              </span>
              <span className="w-2 h-2 rounded-full bg-honey" />
            </a>
            <p className="text-text-dim text-sm mb-4 font-accent tracking-wider">
              OUR STANDARD. NOW IT'S YOURS TOO.
            </p>
            <a 
              href="mailto:hello@codenutra.com"
              className="text-honey hover:text-honey-light transition-colors text-sm"
            >
              hello@codenutra.com
            </a>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-text-warm mb-4">
              Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-dim hover:text-honey transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-text-warm mb-4">
              Account
            </h4>
            <ul className="space-y-2">
              {footerLinks.account.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-dim hover:text-honey transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-text-warm mb-4">
              Policies
            </h4>
            <ul className="space-y-2">
              {footerLinks.policies.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-dim hover:text-honey transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-honey/30 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-sm">
            © 2026 CODE. All Rights Reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-honey transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-honey transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-honey transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
