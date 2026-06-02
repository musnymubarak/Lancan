import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, link, index = 0 }: ServiceCardProps) {
  return (
    <div
      className="group relative glass-light backdrop-blur-xl h-full rounded-3xl p-8 shadow-premium hover-lift hover:shadow-cyan border border-white/40 overflow-hidden"
      style={{
        transitionDelay: `${index * 0.05}s`,
      }}
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="w-14 h-14 rounded-xl bg-blue-950 flex items-center justify-center text-cyan-500 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>

      <h3 className="text-xl font-heading font-bold text-blue-950 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>

      <Link
        to={link}
        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-500 transition-colors group/link"
      >
        Learn More
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
