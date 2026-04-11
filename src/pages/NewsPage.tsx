import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

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
          {/* Article */}
          <AnimatedSection>
            <article className="bg-white rounded-2xl shadow-premium border border-gray-100 overflow-hidden">
              {/* Article header */}
              <div className="p-8 md:p-12 border-b border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-600 text-xs font-semibold rounded-full">
                    Legislative Update
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    Canadian Citizenship Act
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-950 mb-4">
                  Bill To Amend The Canadian Citizenship Act
                </h2>
                <p className="text-gray-500">Important changes in the proposed amendment (Bill C-6)</p>
              </div>

              {/* Article body */}
              <div className="p-8 md:p-12">
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    The following are the key changes proposed under Bill C-6:
                  </p>

                  <div className="space-y-6">
                    <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-cyan-500">
                      <h4 className="font-semibold text-blue-950 mb-2">Reduced Physical Presence Requirement</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Under the proposed amendments in Bill C-6, the amount of time permanent residents have to live in Canada to become eligible to apply for citizenship has been reduced to <strong>three out of five years</strong>. (Under the current law this is four out of six years.)
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-cyan-500">
                      <h4 className="font-semibold text-blue-950 mb-2">Time as Temporary Resident Counted</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        In addition, half of the time spent in Canada on a temporary basis, such as temporary resident or protected person, will be counted towards meeting the physical presence requirement subject to a <strong>maximum of one year</strong>. (The current law has no provision to count the time spent in Canada as a temporary resident.)
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-cyan-500">
                      <h4 className="font-semibold text-blue-950 mb-2">Revised Age Requirements for Language & Test</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Under the proposed legislation only those applicants between the age group of <strong>18-54</strong> are required to meet the language requirement and pass the citizenship test. (Presently permanent residents between the ages of 14-65 are required to meet the language requirement and citizenship test.)
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-cyan-500">
                      <h4 className="font-semibold text-blue-950 mb-2">Repealed Provisions</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The proposed law would <strong>repeal the provisions of intent to reside in Canada</strong> and 183 days of physical presence in any four of the six years currently in effect.
                      </p>
                    </div>
                  </div>
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
