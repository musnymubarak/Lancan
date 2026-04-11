import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const pathwayLinks = [
  { name: 'Express Entry', path: '/services#express' },
  { name: 'Federal Skilled Workers', path: '/services#fsw' },
  { name: 'Family Sponsorship', path: '/services#fs' },
  { name: 'Provincial Nominees', path: '/services#pn' },
  { name: 'Study in Canada', path: '/services#sic' },
  { name: 'Work Permits', path: '/services#wic' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="gradient-blue text-white">
      {/* CTA Strip */}
      <div className="border-b border-white/10">
        <div className="page-container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-2">Ready to Start Your Immigration Journey?</h3>
            <p className="text-white/50 text-sm">Schedule a free assessment with our RCIC-certified consultant.</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-400 transition-all hover:shadow-cyan shrink-0 flex items-center gap-2 group"
          >
            Free Consultation
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="page-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/src/images/logo.png" alt="LanCan Immigration" className="h-[40px] object-contain bg-white/90 rounded p-1" />
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              A full service immigration consultancy firm in Ontario, Canada. Headed by a Regulated Canadian Immigration Consultant with over 30 years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/50 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pathways */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500 mb-6">Pathways</h4>
            <ul className="space-y-3">
              {pathwayLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/50 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500 mb-6">Contact Us</h4>

            {/* Canada Office */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3">Canada Office</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-white/50">402-2 County Court Blvd<br />Brampton, ON, L6W 3W8</p>
                </div>
                <a href="tel:+16476737569" className="flex items-center gap-3 text-sm text-white/50 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-500" /> +1 647 673 7569
                </a>
                <a href="mailto:lancanimmigration@gmail.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-500" /> lancanimmigration@gmail.com
                </a>
              </div>
            </div>

            {/* Sri Lanka Branch */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3">Sri Lanka Branch</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-white/50">73/10 Saman Uyana Kumaragewatta<br />Battaramulla, Sri Lanka</p>
                </div>
                <a href="tel:+94112796210" className="flex items-center gap-3 text-sm text-white/50 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-500" /> +94 11 2796 210
                </a>
                <a href="tel:+94773407427" className="flex items-center gap-3 text-sm text-white/50 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-500" /> +94 773 407 427
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="page-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} LanCan Immigration Consultants. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed & developed by Cinnamon Media Inc
          </p>
        </div>
      </div>
    </footer>
  );
}
