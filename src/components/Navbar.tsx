import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import logoUrl from '../images/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      {
        category: 'Visit & Study',
        items: [
          { name: 'Visit Canada', hash: '#vc' },
          { name: 'Study in Canada', hash: '#sic' },
        ],
      },
      {
        category: 'Immigrate',
        items: [
          { name: 'Express Entry', hash: '#express' },
          { name: 'Federal Skilled Workers', hash: '#fsw' },
          { name: 'Skilled Trade Programme', hash: '#fstp' },
          { name: 'Canadian Experience Class', hash: '#cec' },
          { name: 'Investors & Entrepreneurs', hash: '#iese' },
          { name: 'Family Sponsorship', hash: '#fs' },
          { name: 'Provincial Nominees', hash: '#pn' },
          { name: 'Refugees', hash: '#refugees' },
          { name: 'Citizenship', hash: '#citizenship' },
          { name: 'PR Card Renewal', hash: '#pcr' },
        ],
      },
      {
        category: 'Work in Canada',
        items: [
          { name: 'Work Permits', hash: '#wic' },
          { name: 'Live-in Caregivers', hash: '#lic' },
        ],
      },
      {
        category: 'Other Services',
        items: [
          { name: 'Admissibility Hearings', hash: '#ah' },
          { name: 'Detention Reviews', hash: '#dr' },
          { name: 'Immigration Appeals', hash: '#iad' },
          { name: 'Refugee Claims', hash: '#rcp' },
          { name: 'PRRA', hash: '#prra' },
        ],
      },
    ],
  },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl shadow-premium border-b border-black/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Top bar */}
        <div className={`page-container transition-all duration-300 ${isScrolled ? 'hidden' : 'flex'} items-center justify-end gap-6 mb-2`}>
          <a href="tel:+16476737569" className="flex items-center gap-2 text-xs text-white/70 hover:text-cyan-400 transition-colors">
            <Phone className="w-3 h-3" /> +1 647 673 7569
          </a>
          <a href="mailto:lancanimmigration@gmail.com" className="text-xs text-white/70 hover:text-cyan-400 transition-colors">
            lancanimmigration@gmail.com
          </a>
        </div>

        <div className="page-container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoUrl}
              alt="LanCan Immigration"
              className={`h-[50px] object-contain group-hover:scale-105 transition-transform ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={
                    link.name === 'Contact'
                      ? 'ml-2 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded-lg shadow-premium hover:shadow-cyan transition-all active:scale-95'
                      : `px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                          isActive(link.path)
                            ? isScrolled
                              ? 'text-cyan-600 bg-cyan-100'
                              : 'text-cyan-400 bg-white/10'
                            : isScrolled
                              ? 'text-gray-600 hover:text-blue-950 hover:bg-gray-50'
                              : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`
                  }
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Mega Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                    <div className="bg-white rounded-3xl shadow-premium border border-gray-100 p-8 min-w-[650px] grid grid-cols-2 gap-8 ring-1 ring-black/5">
                      {link.dropdown.map((category) => (
                        <div key={category.category}>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-3">
                            {category.category}
                          </h4>
                          <ul className="space-y-1">
                            {category.items.map((item) => (
                              <li key={item.hash}>
                                <Link
                                  to={`/services${item.hash}`}
                                  className="block px-3 py-1.5 text-sm text-gray-600 hover:text-blue-950 hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-blue-950' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
          <div
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto"
            style={{ animation: 'slide-in-right 0.3s ease-out' }}
          >
            <div className="p-6 pt-20">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.path}
                      className={
                        link.name === 'Contact'
                          ? 'block w-full mt-4 px-6 py-3 bg-cyan-500 text-white text-sm font-semibold rounded-xl text-center hover:bg-cyan-600 transition-colors shadow-premium hover:shadow-cyan'
                          : `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                              isActive(link.path)
                                ? 'text-cyan-600 bg-cyan-100'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`
                      }
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-cyan-200 pl-4">
                        {link.dropdown.map((cat) => (
                          <div key={cat.category}>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500 mt-3 mb-1">
                              {cat.category}
                            </p>
                            {cat.items.map((item) => (
                              <Link
                                key={item.hash}
                                to={`/services${item.hash}`}
                                className="block py-1.5 text-xs text-gray-500 hover:text-blue-950"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a href="tel:+16476737569" className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Phone className="w-4 h-4 text-cyan-500" /> +1 647 673 7569
                </a>
                <p className="text-xs text-gray-400">lancanimmigration@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
