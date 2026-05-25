import { Link } from 'react-router-dom';
import { Award, Scale, Globe, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ciccLogoUrl from '../images/cicc-logo-transparent.png';
import canadaImg from '../images/canada.jpeg';
import founderImg from '../images/founder_hd.png';

export default function AboutPage() {
  return (
    <>
      {/* ═══════════════ PAGE HERO ═══════════════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />

        <div className="relative page-container">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cyan-400">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">About Us</h1>
            <p className="text-lg text-white/50 max-w-2xl">
              Learn about our firm, our commitment to excellence, and the experience behind our immigration services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ COMPANY INTRO ═══════════════ */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-premium">
                  <img
                    src={canadaImg}
                    alt="LanCan Immigration Office"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-cyan">
                  <span className="text-3xl font-heading font-bold">30+</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">Years</span>
                </div>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">
                  // Welcome to LanCan
                </span>
                <h2 className="text-4xl font-heading font-bold text-blue-950 mb-6 leading-tight">
                  Full Service Immigration
                  <br />
                  Consultancy <span className="text-gradient-cyan">Firm</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="text-gray-500 leading-relaxed mb-6">
                  LanCan Immigration Consultants (LIC) is a full service immigration consultancy firm in Ontario, Canada. LIC is headed by a Regulated Canadian Immigration Consultant with over 30 years of experience in the field of Law and Immigration.
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  With our thorough understanding of the immigration law, immigration manuals, the complexities involved in the process and updated knowledge of the ever changing requirements, we are best suited for undertaking your immigration needs.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  We dedicate ourselves to service excellence and professionalism. We focus on providing affordable, effective and expeditious immigration solutions to those who wish to immigrate, study, work, establish business or visit Canada.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-950 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all group"
                >
                  View Our Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CREDENTIALS ═══════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="page-container">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">
              // Our Credentials
            </span>
            <h2 className="text-4xl font-heading font-bold text-blue-950">
              Why We Stand Out
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="w-7 h-7" />, title: 'RCIC Certified', desc: 'Regulated Canadian Immigration Consultant of ICCRC' },
              { icon: <Scale className="w-7 h-7" />, title: 'Legal Expertise', desc: 'Attorney-at-Law with LL.B and LL.M qualifications' },
              { icon: <Globe className="w-7 h-7" />, title: 'Global Experience', desc: 'Worked across Canada, Sri Lanka, and UAE' },
              { icon: <BookOpen className="w-7 h-7" />, title: '30+ Years', desc: 'Decades of experience in Law and Immigration' },
            ].map((item, i) => (
              <div key={i}>
                <AnimatedSection delay={i * 0.1}>
                  <div className="glass-light p-8 rounded-3xl shadow-premium text-center hover-lift hover:shadow-cyan group border border-white/50">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl glass flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-blue-950 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FOUNDER PROFILE ═══════════════ */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <AnimatedSection className="lg:col-span-2 h-full" direction="right">
              <div className="flex flex-col h-full space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-premium border border-gray-150 bg-white shrink-0">
                  <img
                    src={founderImg}
                    alt="Chandralal Attanapola"
                    className="w-full h-[380px] object-cover object-center"
                  />
                </div>

                <div className="bg-blue-950 rounded-2xl p-8 text-white flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-cyan-500 flex items-center justify-center">
                      <span className="text-3xl font-heading font-bold text-white">CA</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-center mb-2">Chandralal Attanapola</h3>
                    <p className="text-sm text-cyan-400 text-center mb-6">LL.B, LL.M, RCIC</p>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span className="text-white/70">Managing Director, Lancan Immigration Consultants</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span className="text-white/70">CICC of #R510775</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span className="text-white/70">Attorney-at-Law, Supreme Court of Sri Lanka</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span className="text-white/70">30+ Years in Law & Immigration</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                    <img src={ciccLogoUrl} alt="CICC Certified Logo" className="h-[100px] object-contain" />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Bio content */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">
                  // Meet Our Founder
                </span>
                <h2 className="text-4xl font-heading font-bold text-blue-950 mb-8">
                  Chandralal Attanapola
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-500 leading-relaxed mb-6">
                    Chandralal Attanapola, LL.B, LL.M, RCIC is a Regulated Canadian Immigration Consultant of the College of Immigration and Citizenship Consultants (CICC). He is Managing Director of LanCan Immigration Consultants which provides immigration consultancy services.
                  </p>

                  <p className="text-gray-500 leading-relaxed mb-6">
                    He is also an Attorney-at-Law of the Supreme Court of Sri Lanka with over 30 years of experience in the fields of Law, Insurance and Shipping. He possessed senior management experience both in the private and public sector in Sri Lanka.
                  </p>

                  <p className="text-gray-500 leading-relaxed mb-6">
                    Prior to becoming an Immigration Consultant, Chandralal has practiced as litigation counsel in both the original and appellate courts in Sri Lanka. Previously he held senior positions both in the Government and private sector in Sri Lanka. He also worked as Underwriting Manager at Arab Orient Insurance Company, United Arab Emirates. He worked in Canada as Bodily Injury Claim Specialist at York Fire and Casualty Insurance Company in Mississauga.
                  </p>

                  <p className="text-gray-500 leading-relaxed mb-6">
                    During his multi-faceted career, Chandralal has travelled overseas widely on official duty representing Sri Lanka in promoting trade and investment, shipping, and Insurance business.
                  </p>
                </div>
              </AnimatedSection>

              {/* CICC Section */}
              <AnimatedSection delay={0.15}>
                <div className="mt-8 p-6 bg-cyan-100 rounded-2xl border border-cyan-200">
                  <h4 className="font-heading font-bold text-blue-950 mb-3">CICC Accreditation</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Chandralal Attanapola is a Regulated Canadian Immigration Consultant of the College of Immigration and Citizenship Consultants (CICC). CICC is the only regulatory body for the Immigration Consultants in Canada. Citizenship and Immigration Canada (CIC) has recognized members of the ICCRC as authorized representatives who can represent people on immigration matters.
                  </p>
                </div>
              </AnimatedSection>

              {/* Free Assessment */}
              <AnimatedSection delay={0.2}>
                <div className="mt-6 p-6 bg-blue-950 rounded-2xl text-white">
                  <h4 className="font-heading font-bold mb-3">Free Assessment Session</h4>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    We in our free assessment session carefully assess your circumstance and qualifications and let you have our preliminary opinion whether you would qualify for applying to Canada to become a permanent resident, for study, for work or any other programme you have in mind. If you do not qualify we will let you know in the first available opportunity so that you need not pay fees unnecessarily.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    Contact Us for Assessment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
