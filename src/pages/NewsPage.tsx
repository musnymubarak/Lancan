import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface NewsArticle {
  title: string;
  category: string;
  author: string;
  date: string;
  summary: string;
  content: string[];
}

const newsArticle: NewsArticle = {
  title: "Parents and Grand parents sponsorships",
  category: "General News",
  author: "LanCan Immigration",
  date: "2026-07-23",
  summary: "Canada has suspended the intake of new applications under the Parents and Grandparents Program (PGP), preventing Canadian citizens and permanent residents from sponsoring their parents or grandparents for permanent residence until further notice. While previously submitted applications will continue to be processed. However eligible parents and grandparents may still visit Canada through the Super Visa, which permits stays of up to five years per visit and remains valid for up to 10 years.",
  content: [
    "Canadian citizens and permanent residents will have no further opportunities to sponsor their parents or grandparents for permanent residence, unless the federal government reverses course.",
    "Canada is “pausing the intake of new applications under the Parents and Grandparents Program” (PGP), according to a government news release published on July 15, 2026.",
    "The immigration department “will not accept new interest to sponsor forms or invite potential sponsors to apply until further notice,” according to the government news release.",
    "The department says it will continue to process PGP sponsorship applications which have already been received, with the objective of approving 15,000 applications for permanent residence in 2026.",
    "However the super visa for parents and grandparents allows holders to visit their hosting relatives in Canada for up to five years at a time, with the super visa being issued for up to 10 years in validity."
  ]
};

export default function NewsPage() {
  return (
    <>
      {/* ═══════ PAGE HERO ═══════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />

        <div className="relative page-container">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cyan-400">News</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">Immigration News</h1>
            <p className="text-lg text-white/50 max-w-2xl">
              Stay updated with the latest changes in Canadian immigration law and policy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ NEWS CONTENT ═══════ */}
      <section className="section-padding bg-white">
        <div className="page-container max-w-4xl">
          <AnimatedSection>
            <article className="bg-white rounded-2xl shadow-premium border border-gray-100 overflow-hidden">
              {/* Article header */}
              <div className="p-8 md:p-12 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-600 text-xs font-semibold rounded-full">
                    {newsArticle.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {newsArticle.date}
                  </span>
                  <span className="text-xs text-gray-400">
                    By {newsArticle.author}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-950 mb-4">
                  {newsArticle.title}
                </h2>
                <p className="text-gray-500 leading-relaxed">{newsArticle.summary}</p>
              </div>

              {/* Article body */}
              <div className="p-8 md:p-12">
                <div className="prose prose-gray max-w-none">
                  {newsArticle.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-lg text-gray-600 leading-relaxed mb-6 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </AnimatedSection>

          {/* Stay Updated CTA */}
          <AnimatedSection delay={0.2}>
            <div className="mt-12 p-8 bg-blue-950 rounded-2xl text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Stay Updated on Immigration Changes</h3>
              <p className="text-white/50 mb-6 max-w-lg mx-auto">
                For the latest updates on immigration law changes and how they may affect your application, contact our consultants.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-400 transition-all"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

