import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  GraduationCap,
  Briefcase,
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle2,
  ChevronRight,
  Scale,
  BookOpen,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CounterAnimation from '../components/CounterAnimation';
import ServiceCard from '../components/ServiceCard';

import homeImg from '../images/home.jpeg';
import homw2Img from '../images/homw-2.jpeg';
import canadaHdImg from '../images/canada-hd.jpeg';
import canadaImg from '../images/canada1.png';
import heroBgImg from '../images/hero-backround.jpeg';

export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${heroBgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />

        <div className="relative page-container py-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <AnimatedSection delay={0}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 mb-8">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">CICC  Certified Consultants</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]">
                  Your Pathway
                  <br />
                  to <span className="text-gradient-cyan">Canada</span>
                  <br />
                  <span className="font-normal italic text-white/70">Starts Here.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
                  LanCan Immigration Consultants is a full service immigration consultancy firm in Ontario, Canada, with over 30 years of experience in the field of Law and Immigration.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-400 transition-all hover:shadow-cyan active:scale-95"
                  >
                    Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    Explore Services
                  </Link>
                </div>
              </AnimatedSection>

              {/* Trust Indicators */}
              <AnimatedSection delay={0.4}>
                <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <p className="text-3xl font-heading font-bold text-cyan-500">30+</p>
                    <p className="text-xs text-white/40 mt-1">Years Experience</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-3xl font-heading font-bold text-cyan-500">CICC</p>
                    <p className="text-xs text-white/40 mt-1">Certified</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-3xl font-heading font-bold text-cyan-500">2</p>
                    <p className="text-xs text-white/40 mt-1">Global Offices</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right - Feature Cards */}
            <div className="hidden lg:block relative">
              <AnimatedSection delay={0.2} direction="left">
                <div className="relative">
                  {/* Main Image */}
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={canadaImg}
                      alt="Canada Landscape"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>

                  {/* Floating card 2 */}
                  <div className="absolute -top-4 -right-4 glass-light border border-white/50 shadow-premium rounded-2xl p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-950 rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-blue-950">Free Assessment</p>
                        <p className="text-xs text-gray-400">No obligations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 50L48 45C96 40 192 30 288 35C384 40 480 60 576 65C672 70 768 60 864 50C960 40 1056 30 1152 30C1248 30 1344 40 1392 45L1440 50V100H0V50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ═══════════════ ABOUT PREVIEW ═══════════════ */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-premium">
                  <img
                    src={homeImg}
                    alt="Professional consultation"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-cyan">
                  <span className="text-3xl font-heading font-bold">30+</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">Years</span>
                </div>

              </div>
            </AnimatedSection>

            {/* Content side */}
            <div>
              <AnimatedSection>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">
                  // Who We Are
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-blue-950 mb-6 leading-tight">
                  Help You From Start
                  <br />
                  To End <span className="text-gradient-cyan">Immigration</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="text-gray-500 leading-relaxed mb-6">
                  We dedicate ourselves to service excellence and professionalism. We focus on providing affordable, effective and expeditious immigration solutions to those who wish to immigrate, study, work, establish business or visit Canada.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  With our thorough understanding of the immigration law, immigration manuals, the complexities involved in the process and updated knowledge of the ever changing requirements, we are best suited for undertaking your immigration needs.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                    <span className="text-sm font-medium text-blue-950">Immigration Process Experts</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                    <span className="text-sm font-medium text-blue-950">Reliable & Fast Execution</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                    <span className="text-sm font-medium text-blue-950">Free Initial Assessment</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                    <span className="text-sm font-medium text-blue-950">CICC Authorized</span>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-950 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all group"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="page-container">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">
              // Our Service Areas
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-blue-950 mb-4">
              Comprehensive Immigration Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide end-to-end immigration solutions for individuals, families, and businesses seeking to make Canada their home.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={0} className="h-full">
              <ServiceCard
                icon={<Globe className="w-6 h-6" />}
                title="Immigrate"
                description="Express Entry, Federal Skilled Workers, Provincial Nominees, Family Sponsorship, and more pathways to permanent residency."
                link="/services#express"
                index={0}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="h-full">
              <ServiceCard
                icon={<GraduationCap className="w-6 h-6" />}
                title="Visit & Study"
                description="Tourist visas, Super Visas, study permits, and international education opportunities across Canada."
                link="/services#vc"
                index={1}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="h-full">
              <ServiceCard
                icon={<Briefcase className="w-6 h-6" />}
                title="Work in Canada"
                description="Temporary work permits, LMIA applications, live-in caregiver programs, and employer services."
                link="/services#wic"
                index={2}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="h-full">
              <ServiceCard
                icon={<Shield className="w-6 h-6" />}
                title="Other Services"
                description="Admissibility hearings, detention reviews, immigration appeals, refugee claims, and PRRA."
                link="/services#ah"
                index={3}
              />
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-500 transition-colors group"
            >
              View All Services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-blue" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${canadaHdImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }} />

        <div className="relative page-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 30, suffix: '+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
              { end: 500, suffix: '+', label: 'Successful Cases', icon: <CheckCircle2 className="w-6 h-6" /> },
              { end: 2, suffix: '', label: 'Global Offices', icon: <Globe className="w-6 h-6" /> },
              { end: 15, suffix: '+', label: 'Service Categories', icon: <Award className="w-6 h-6" /> },
            ].map((stat, i) => (
              <div key={i}>
                <AnimatedSection delay={i * 0.1}>
                  <div className="text-center p-8 liquid-panel transition-transform hover:-translate-y-1">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      {stat.icon}
                    </div>
                    <CounterAnimation
                      end={stat.end}
                      suffix={stat.suffix}
                      className="text-4xl font-heading font-bold text-white"
                    />
                    <p className="text-sm text-white/50 mt-2">{stat.label}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">
                  // Our Credentials
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-blue-950 mb-6 leading-tight">
                  Why We <span className="text-gradient-cyan">Stand Out</span>
                </h2>
              </AnimatedSection>

              <div className="space-y-4">
                {[
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: 'CICC Certified',
                    desc: 'Regulated Canadian Immigration Consultant of CICC',
                  },
                  {
                    icon: <Scale className="w-5 h-5" />,
                    title: 'Legal Expertise',
                    desc: 'Attorney-at-Law with LL.B and LL.M qualifications',
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    title: 'Global Experience',
                    desc: 'Worked across Canada, Sri Lanka, and UAE',
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: '30+ Years',
                    desc: 'Decades of experience in Law and Immigration',
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <AnimatedSection delay={0.15 + i * 0.1}>
                      <div className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-cyan-200 hover:shadow-premium transition-all group cursor-default">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-950 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-950 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                ))}
              </div>
            </div>

            <AnimatedSection direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-premium">
                  <img
                    src={homw2Img}
                    alt="Immigration consultation meeting"
                    className="w-full h-[550px] object-cover"
                  />
                </div>
                {/* Accent corner */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-cyan-500 rounded-bl-2xl" />
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-cyan-500 rounded-tr-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-blue" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 rounded-l-[100px] blur-3xl" />

        <div className="relative page-container text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Not Sure Which Pathway
              <br />
              Is Right for You?
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mb-10 text-lg">
              Please call us or send an Email to make an appointment. Our expert consultants are ready to review your profile and provide a definitive legal strategy.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-400 transition-all hover:shadow-cyan"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:lancanimmigration@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Email Your Resume
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
