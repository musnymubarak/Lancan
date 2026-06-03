import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import visitStudyImg from '../images/visit_study.png';
import immigrateImg from '../images/immigrate.png';
import workCanadaImg from '../images/work_canada.png';
import otherServicesImg from '../images/other_services.png';

const categories = [
  {
    name: 'Visit & Study',
    sections: [
      { id: 'vc', label: 'Visit Canada' },
      { id: 'sic', label: 'Study in Canada' },
    ],
  },
  {
    name: 'Immigrate',
    sections: [
      { id: 'express', label: 'Express Entry' },
      { id: 'fsw', label: 'Federal Skilled Workers' },
      { id: 'fstp', label: 'Federal Skilled Trade' },
      { id: 'cec', label: 'Canadian Experience Class' },
      { id: 'iese', label: 'Investors & Entrepreneurs' },
      { id: 'fs', label: 'Family Sponsorship' },
      { id: 'pn', label: 'Provincial Nominees (PNP)' },
      { id: 'refugees', label: 'Refugees & Protection' },
      { id: 'rcp', label: 'Refugee Claims Process' },
      { id: 'citizenship', label: 'Citizenship' },
      { id: 'pcr', label: 'PR Card Renewal' },
    ],
  },
  {
    name: 'Work in Canada',
    sections: [
      { id: 'wic', label: 'Work Permits' },
      { id: 'lic', label: 'Live-in Caregivers' },
    ],
  },
  {
    name: 'Other Services',
    sections: [
      { id: 'ah', label: 'Admissibility Hearings' },
      { id: 'dr', label: 'Detention Reviews' },
      { id: 'iad', label: 'Immigration Appeal (IAD)' },
      { id: 'rad', label: 'Refugee Appeal (RAD)' },
      { id: 'prra', label: 'PRRA Assessment' },
    ],
  },
];

function EmailCTA() {
  return (
    <div className="mt-6 p-4 bg-cyan-100 rounded-xl border border-cyan-200 flex items-center gap-3">
      <Mail className="w-5 h-5 text-cyan-600 shrink-0" />
      <p className="text-sm text-gray-600">
        For a free assessment of your eligibility, please email your complete resume to{' '}
        <a href="mailto:info@lancanimmigration.com" className="text-cyan-600 font-semibold hover:underline">
          info@lancanimmigration.com
        </a>
      </p>
    </div>
  );
}

export default function ServicesPage() {
  const location = useLocation();
  const [expandedNav, setExpandedNav] = useState<string[]>(['Visit & Study']);

  // Scroll to hash on load
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [location.hash]);

  const toggleNav = (name: string) => {
    setExpandedNav((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

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
              <span className="text-cyan-400">Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-white/50 max-w-2xl">
              Comprehensive Canadian Immigration Services covering all pathways to Canada — from Express Entry to Refugee Protection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ CONTENT ═══════ */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:w-72 shrink-0">
              <div className="sticky top-28 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">
                  Service Categories
                </p>
                <nav className="space-y-1">
                  {categories.map((cat) => (
                    <div key={cat.name}>
                      <button
                        onClick={() => toggleNav(cat.name)}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-blue-950 hover:bg-white rounded-lg transition-colors"
                      >
                        {cat.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedNav.includes(cat.name) ? 'rotate-180' : ''}`} />
                      </button>
                      {expandedNav.includes(cat.name) && (
                        <div className="ml-3 border-l-2 border-cyan-200 pl-3 space-y-0.5 mb-2">
                          {cat.sections.map((sec) => (
                            <a
                              key={sec.id}
                              href={`#${sec.id}`}
                              className="block px-2 py-1.5 text-xs text-gray-500 hover:text-cyan-600 hover:bg-white rounded transition-colors"
                            >
                              {sec.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="block w-full px-4 py-3 bg-cyan-500 text-white text-sm font-semibold rounded-xl text-center hover:bg-cyan-600 transition-colors"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* ─────── VISIT & STUDY ─────── */}
              <div className="mb-8">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-2">// Visit & Study</span>
              </div>

              {/* 11. Visit Canada */}
              <article id="vc" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Visit Canada</h2>
                  <div className="rounded-2xl overflow-hidden shadow-premium border border-gray-150 h-[300px] mb-8 bg-white">
                    <img src={immigrateImg} alt="Visit Canada" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-6 mb-4">Temporary Resident Visa (Tourist)</h3>
                    <p>Citizens of certain countries require a Temporary Resident Visa to visit Canada. Applications are submitted to the nearest Canadian embassy. Applicants must demonstrate ties to their home country (employment, assets, and family) and the intention to leave Canada at the end of their authorized visit.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Business Visitor</h3>
                    <p>A Business Visitor enters Canada to explore investment opportunities or advance business relationships with Canadian companies, without entering the Canadian labour market. The principal place of business and source of income must remain outside Canada. A letter of invitation from a Canadian business partner is typically required.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Parent and Grandparent Super Visa</h3>
                    <p>You can visit your children or grandchildren (if they’re a permanent resident, a Canadian citizen or a registered Indian) for 5 years at a time with a super visa. It provides multiple entries for a period of up to 10 years. You can’t include dependents in this application.</p>
                    <p>Requirements include:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Child/grandchild in Canada is a citizen or PR and meets minimum income threshold</li>
                      <li>Child/grandchild will provide financial support to the applicant</li>
                      <li>Valid Canadian medical insurance coverage for at least one year</li>
                      <li>Passed an immigration medical exam</li>
                      <li>Child or grandchild must satisfy the minimum necessary income requirement</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 12. Study in Canada */}
              <article id="sic" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Study in Canada</h2>
                  <div className="rounded-2xl overflow-hidden shadow-premium border border-gray-150 h-[300px] mb-8 bg-white">
                    <img src={visitStudyImg} alt="Study in Canada" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>To study in Canada, foreign nationals require a Study Permit — a written authorization to engage in studies at an accredited Canadian institution. Canada hosts over 125 universities and colleges offering 10,000+ programmes, plus 138+ community colleges and institutions with post-graduate and bachelor's degrees.</p>
                    <p>Study permit eligibility requirements:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Acceptance letter from a Canadian school, college, university, or other institution which are recognized as a designated learning institution (DLI)</li>
                      <li>Sufficient funds to cover tuition fees and living expenses for the programme duration</li>
                      <li>Satisfactory evidence of intent to leave Canada at the end of the authorized study period</li>
                      <li>Good health</li>
                    </ul>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Provincial Attestation Letter (PAL)</h3>
                    <p>A Provincial Attestation Letter (PAL) is a mandatory document issued by a Canadian province or territory that proves an international student has been allocated a spot under the federal international student enrollment cap. You must submit your PAL to Immigration, Refugees and Citizenship Canada (IRCC) alongside your study permit application. You as a student do not need to apply for PAL. Your DLI secures the PAL from the relevant province.</p>
                    <p>The following categories of students are exempted from the PAL requirement:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li><strong>Graduate Students:</strong> Students applying for master’s or doctoral degree programs at a public DLI.</li>
                      <li><strong>Primary/Secondary Students:</strong> Children attending preschool, primary school, or high school (up to Grade 12).</li>
                    </ul>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">On-Campus Employment</h3>
                    <p>Full-time post-secondary students may work without a work permit on the campus of their registered institution.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Off-Campus Work</h3>
                    <p>Study permit holders enrolled full-time at a Designated Learning Institution (DLI) may work up to 24 hours per week during academic sessions and full-time during scheduled breaks such as winter, summer and reading week, without requiring a separate work permit.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Post-Graduate Work Permit Programme (PGWP)</h3>
                    <p>Graduates from participating post-secondary institutions may apply for a work permit (up to 3 years) to gain Canadian work experience without an LMIA requirement. International students who have obtained Canadian work experience through PGWP are eligible to apply for Permanent Residence under various Provincial Nominee Programmes.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* ─────── IMMIGRATE ─────── */}
              <div className="mt-20 mb-8">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-2">// Immigrate to Canada</span>
              </div>

              {/* 1. Express Entry */}
              <article id="express" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Express Entry</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>The Express Entry system is the primary federal mechanism for managing applications under key economic immigration programs. It is not an immigration program itself, but a selection system managing intake for the following:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Federal Skilled Worker Program</li>
                      <li>Federal Skilled Trades Program</li>
                      <li>Canadian Experience Class</li>
                      <li>Provincial Nominee Programs (partially)</li>
                    </ul>
                    <p>Eligible candidates submit an online Express Entry Profile providing details on work experience, language ability, education, age, and other personal information. Candidates are scored using a Comprehensive Ranking System (CRS) based on:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Core human capital factors</li>
                      <li>Accompanying spouse or common-law partner factors (if applicable)</li>
                      <li>Skill transferability factors</li>
                      <li>Qualifying offer of arranged employment</li>
                      <li>Provincial nomination factors</li>
                    </ul>
                    <p>Candidates without an employment offer or provincial nomination must also register with the Canadian Job Bank. IRCC periodically issues Invitations to Apply (ITAs) to the highest-ranking candidates. Once invited, applicants have 60 days to submit a complete permanent residence application.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 2. Federal Skilled Workers */}
              <article id="fsw" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Federal Skilled Workers</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>To satisfy basic eligibility under the Federal Skilled Worker Programme, the applicant must meet one of the following:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>One year of continuous full-time (or equivalent part-time) paid work experience in an eligible occupation within the last 10 years.</li>
                      <li>The work experience must be in one of such TEER categories as TEER 0, 1, 2 or 3 of the National Occupation Classification which is Canada’s official system for classifying jobs. The TEER stands for training, education, experience and responsibilities. You must choose the NOC that most closely aligns with your work experience.</li>
                      <li>Must have the Minimum level of Language requirement: That is CLB 7 in all 4 four skilled areas for TEER 0 or 1 Jobs and CLB 5 for in all four skilled areas for TEER 2 or 3 Jobs.</li>
                      <li>Education: If you went to a school in Canada, You must have a certificate, diplomas or degree from a Canadian secondary institution or post-secondary institution. If you have foreign education, you must have a completed education credential Assessment from an approved credential assessment institution recognized by Immigration Canada.</li>
                      <li>The applicant must also meet minimum requirements in work experience, language, and education. Eligible applicants are assessed against six selection factors: education level, language proficiency, work experience length, age, arranged employment, and adaptability. A score of 67 or above out of 100 is required for selection as a Permanent Resident.</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 3. Federal Skilled Trade Programme */}
              <article id="fstp" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Federal Skilled Trade Programme</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>This programme targets individuals seeking permanent residence based on qualification in a skilled trade.</p>
                    <p>Skilled trades need specialized knowledge and hands-on work experience. You’ll need an apprenticeship for most trades.</p>
                    <p>Skilled tradespeople may work in sectors such as:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-600">
                      <li>construction</li>
                      <li>transportation</li>
                      <li>manufacturing and industrial</li>
                      <li>natural resources and agriculture</li>
                    </ul>
                    <p>Your skilled work experience must be in one of the NOC Major groups 72, 73, 82, 83 92 or 93 and Minor groups 6320 or unit group 62200.</p>
                    <p>Applicant must have at least 2 years of full-time work experience (or 3,120 hours total) in a skilled trade within the 5 years before you apply.</p>
                    <p>The applicant must have:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-600">
                      <li>At least two years of full-time paid work experience in a skilled trade within five years of becoming independently qualified to practice</li>
                      <li>Meeting NOC job requirements for the applicable skilled trade</li>
                      <li>A full-time employment offer for at least one year, or a certificate of qualification issued by a provincial/territorial body</li>
                      <li>Meeting the required language levels in English or French across all four abilities. The applicant must have CLB 5 language skills for Speaking and Listening and CLB 4 for Reading and Writing.</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 4. Canadian Experience Class */}
              <article id="cec" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Canadian Experience Class (CEC)</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>The CEC provides a pathway for temporary foreign workers and international students with Canadian credentials to transition to permanent resident status. Eligible applicants must have:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>At least 12 months of qualifying Canadian work experience in an occupation in any TEER 0, 1 2, or 3 categories of the National Occupation Classification (NOC) occupation.</li>
                      <li>Obtained the Work Experience within 36 months preceding the application date</li>
                      <li>Required English or French language proficiency (speaking, reading, listening and writing). You must satisfy CLB level 7 for TEER 0 or 1 Jobs and CLB 5 for TEER 2 or 3 jobs.</li>
                      <li>This class is particularly relevant to international students who studied in Canada for two or more years and completed at least one year of post-graduation work.</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 5. Investors, Entrepreneurs & Self-Employed */}
              <article id="iese" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Investors, Entrepreneurs & Self-Employed</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Canada's business immigration programme attracts experienced business persons capable of making significant contributions to the economy. Two streams are currently available:</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Start-up Visa</h3>
                    <p>Links immigrant entrepreneurs with private-sector organizations providing venture capital or incubation. Eligibility requires a business venture supported by one of the following designated organizations:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Designated Venture Capital Fund</li>
                      <li>Designated Angel Investor Group</li>
                      <li>Designated Business Incubators</li>
                    </ul>
                    <p>Additionally, applicants must meet language requirements, hold at least one year of post-secondary education, and demonstrate sufficient settlement funds.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Self-Employed Persons</h3>
                    <p>Targets individuals who will be self-employed in Canada. Applicants must have:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Relevant experience in cultural activities or athletics and the ability to make a significant contribution to Canadian cultural or athletic life, OR</li>
                      <li>Farm management experience with the intent to buy and manage a farm in Canada</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 6. Family Sponsorship */}
              <article id="fs" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Family Sponsorship</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Canadian citizens and Permanent Residents may sponsor the following classes of persons:</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Spouse, Common-Law Partner or Conjugal Partner</h3>
                    <p>Covers legally married spouses (marriage must be valid under both the jurisdiction where it occurred and the Canadian law), common-law partners (cohabiting in a conjugal relationship for at least one year), and conjugal partners residing outside Canada in a relationship of at least one year's duration.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Dependent Children</h3>
                    <p>Biological or legally adopted children who are either under 22 years of age and not a spouse or common-law partner, or 22 years and older but unable to be financially self-supporting due to a physical or mental condition since before age 22.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Parents and Grandparents</h3>
                    <p>Canadian citizens and permanent residents can sponsor parents and grandparents for permanent residency. Sponsors must demonstrate financial resources meeting the Minimum Necessary Income (MNI) threshold for their household size. Parents and grandparents also remain eligible for the Super Visa.</p>
                    <p>As per the new immigration guidelines potential sponsors are required to submit an interest to sponsor form when IRCC open the applications from the sponsors.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Orphans</h3>
                    <p>An orphaned brother, sister, nephew, niece, or grandchild who is unmarried and under 18 years of age.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Adopted Persons</h3>
                    <p>Persons under 18 years of age whom the sponsor intends to adopt in Canada.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Relative of the Sponsor</h3>
                    <p>Any relative of the sponsor (by blood or adoption) regardless of age, provided the sponsor has no other relative in Canada who is a Canadian citizen or Permanent Resident.</p>

                    <p className="mt-6 text-sm text-gray-500 italic">
                      Note: Both the sponsor and sponsored person must meet eligibility criteria under IRPA. The sponsor must provide an undertaking of financial support.
                    </p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 7. Provincial Nominee Programme */}
              <article id="pn" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Provincial Nominee Programme (PNP)</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>The Provincial Nominee Program (PNP) lets provinces and Territories (except Quebec and Nunavut) nominate people who:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>have the skills, education and work experience to help their economy (like business people and skilled workers)</li>
                      <li>want to live in that province or territory</li>
                      <li>want to become permanent residents of Canada</li>
                    </ul>
                    <p>Each province and territory has its own requirements. They also set the number of people they can nominate each year.</p>
                    <p>There are 2 ways to apply for permanent residence through the PNP. The option you use depends on the province or territory you choose to immigrate to. The province or territory will also let you know whether you must apply through the Express Entry process or through the non-Express Entry process.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Apply through Express Entry</h3>
                    <p>This option applies to you if you qualify for both the province or territory’s PNP stream and a federal program under Express Entry. If you’re nominated, create your Express Entry profile. You’ll get 600 extra points, which helps you get invited to apply for permanent residence.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Apply through the non-Express Entry process</h3>
                    <p>This option applies to you if you qualify for the province or territory’s PNP stream, but don’t qualify for the federal program under Express Entry.</p>
                  </div>
                </AnimatedSection>
              </article>

              {/* 8. Refugees & Persons In Need Of Protection */}
              <article id="refugees" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Refugees & Persons In Need Of Protection</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Canada grants protection under UN conventions including the 1951 Convention Relating to the Status of Refugees, 1967 Protocol, and the 1984 Convention against Torture.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Convention Refugee</h3>
                    <p>A person outside their country of nationality with a well-founded fear of persecution on grounds of race, religion, nationality, membership in a particular social group, or political opinion, who is unable or unwilling to seek protection from that country.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Person in Need of Protection</h3>
                    <p>A person in Canada whose removal to their country of nationality would subject them personally to a risk of torture, risk to life, or risk of cruel and unusual treatment or punishment.</p>
                  </div>
                </AnimatedSection>
              </article>

              {/* Refugee Claims Process */}
              <article id="rcp" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Refugee Claims Process</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Refugee claims may be initiated at a port of entry with CBSA or at an inland IRCC office. An officer determines eligibility for referral to the Refugee Protection Division (RPD) of the IRB.</p>
                    <p>Claims ineligible for IRB referral include persons who:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Previously had a claim rejected, found ineligible, withdrawn, or abandoned in Canada</li>
                      <li>Have been granted refugee status in another country</li>
                      <li>Are barred under the Safe Third Country Agreement</li>
                      <li>Are inadmissible on security or certain criminality grounds</li>
                    </ul>
                    <p>The refugee hearing must be scheduled within 60 days of referral. Upon a positive determination, the claimant is eligible to apply for permanent residence.</p>
                    <p>Recent changes under Bill C-12 strictly enforce new eligibility restrictions, such as a 1-year deadline from your first entry into Canada to file an inland claim, and a 14-day deadline if you crossed the Canada-U.S. border irregularly.</p>
                    <p>The Claimants disqualified by these new rules cannot have an oral IRB hearing. Instead, they are diverted to the Pre-Removal Risk Assessment (PRRA) process to evaluate if they face a risk of torture or persecution before removal.</p>
                    <p>LanCan consultants assist clients in making refugee claims with the Immigration and Refugee Board (IRB) and provide representation at Refugee Protection Division hearings.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 9. Citizenship */}
              <article id="citizenship" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Citizenship</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Permanent Residents aged 18 or older are eligible to apply for Canadian Citizenship if they meet all of the following:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>To apply for Canadian citizenship, you must be a permanent resident and physically present in Canada for at least 1,095 days (3 years) within the 5 years immediately before the date you sign your application. Time spent as a temporary resident or protected person before becoming a permanent resident may count as half-days, up to a maximum of 365 days</li>
                      <li>Personal income tax filing compliance in four taxation years within the five years preceding the application</li>
                      <li>Adequate knowledge of English or French sufficient for short, everyday conversations</li>
                      <li>Understanding of the rights, responsibilities, and privileges of citizenship (ages 14–64 must pass a citizenship test based on 'Discover Canada')</li>
                    </ul>
                    <p>A prior criminal conviction in or outside Canada may render an applicant ineligible.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 10. PR Card Renewal */}
              <article id="pcr" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">PR Card Renewal</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>The Permanent Resident (PR) card is a status document required under IRPA, normally valid for five years. IRPA imposes a residency obligation: a PR must be physically present in Canada for at least 730 days during any five-year period.</p>
                    <p>Time outside Canada is credited as presence in Canada if the PR is:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Accompanying a Canadian citizen who is their spouse, common-law partner, or is a child accompanying a parent</li>
                      <li>Employed full-time by a Canadian business, the federal public service, or a provincial public service</li>
                      <li>An accompanying spouse, CLP, or child of a PR employed by a Canadian business or public service</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* ─────── WORK IN CANADA ─────── */}
              <div className="mt-20 mb-8">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-2">// Work in Canada</span>
                <AnimatedSection className="mt-4">
                  <div className="rounded-2xl overflow-hidden shadow-premium border border-gray-150 h-[300px] mb-8 bg-white">
                    <img src={workCanadaImg} alt="Work in Canada" className="w-full h-full object-cover" />
                  </div>
                </AnimatedSection>
              </div>

              {/* 13. Work Permits */}
              <article id="wic" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Work Permits</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Most jobs in Canada require a work permit and a positive Labour Market Impact Assessment (LMIA). The employer must obtain an LMIA from Employment and Social Development Canada (ESDC) prior to hiring a foreign national for most positions.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Applying from Outside Canada</h3>
                    <p>Key documents required for a work permit application:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Job offer or employment contract detailing duties, salary, and anticipated duration</li>
                      <li>Copy of the positive LMIA from the Government of Canada</li>
                      <li>Evidence of meeting job requirements: educational qualifications, relevant experience, Canadian certifications if applicable</li>
                    </ul>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Applying from Inside Canada</h3>
                    <p>A person may apply for a work permit from within Canada if they:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Are currently in Canada with a valid study/work permit (or are the spouse of such a permit holder)</li>
                      <li>Have graduated from a Canadian post-secondary institution</li>
                      <li>Hold a Temporary Resident Permit valid for at least six months</li>
                      <li>Have an in-Canada permanent residence application on file</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 14. Live-in Caregivers */}
              <article id="lic" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Live-in Caregivers</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Live-in Caregivers provide care for children, elderly persons, or persons with disabilities in private homes and must reside in the home where they work.</p>
                    <p>Eligibility for permanent residence: minimum 24 months or 3,900 hours of live-in caregiver employment within 4 years following entry. Requirements:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Positive LMIA from a Canadian employer</li>
                      <li>Written employment contract signed by both parties</li>
                      <li>Education equivalent to Canadian secondary school completion</li>
                      <li>At least six months of full-time training or one year of paid work experience as a caregiver in a related field</li>
                      <li>Proficiency in English or French</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* ─────── OTHER SERVICES ─────── */}
              <div className="mt-20 mb-8">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-2">// Other Services</span>
                <AnimatedSection className="mt-4">
                  <div className="rounded-2xl overflow-hidden shadow-premium border border-gray-150 h-[300px] mb-8 bg-white">
                    <img src={otherServicesImg} alt="Other legal and appeal services" className="w-full h-full object-cover" />
                  </div>
                </AnimatedSection>
              </div>

              {/* 15. Admissibility Hearings */}
              <article id="ah" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Admissibility Hearings</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>An admissibility hearing under section 44(2) of IRPA addresses allegations of inadmissibility due to security concerns, human rights violations, serious or organized criminality, health grounds, financial reasons, misrepresentation, cessation of refugee protection, non-compliance with the Act, or inadmissible family members.</p>
                    <p>Hearings are conducted by a member of the Immigration Division of the IRB and may result in a Departure Order, Exclusion Order, or Deportation Order. LanCan consultants provide representation at admissibility hearings to protect clients' legal rights.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 16. Detention Reviews */}
              <article id="dr" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Detention Reviews</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>An immigration officer may arrest and detain a foreign national without a warrant if there are reasonable grounds to believe the individual is inadmissible and a danger to the public, unlikely to appear for examination or removal, or has failed to establish identity.</p>
                    <p>Detention review timeline:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>First review: within 24 hours of detention</li>
                      <li>Second review: within 7 days of the first review</li>
                      <li>Subsequent reviews: every 30 days</li>
                    </ul>
                    <p>The reviewing member determines whether valid grounds for detention exist and must order release (with or without conditions) if grounds are not established. LanCan consultants provide representation at all detention review hearings.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 17. Immigration Appeal Division */}
              <article id="iad" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Immigration Appeal Division (IAD)</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>The IAD has jurisdiction to review appeals in the following circumstances:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Sponsor appealing a refused sponsorship application</li>
                      <li>Foreign national holding a PR visa appealing a removal order issued at examination or admissibility hearing</li>
                      <li>Permanent resident or protected person appealing a removal order</li>
                      <li>Permanent resident appealing a decision made outside Canada regarding non-compliance with residency obligations</li>
                      <li>The Minister appealing a decision of an Immigration Division</li>
                    </ul>
                    <p>The IAD holds equitable jurisdiction and may grant an appeal on humanitarian and compassionate grounds even where the original decision was legally valid.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 18. Refugee Appeal Division */}
              <article id="rad" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Refugee Appeal Division (RAD)</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Failed refugee claimants may appeal RPD decisions to the RAD on questions of law, fact, or mixed law and fact.</p>
                    <p>Filing deadlines:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Notice of appeal: within 15 days of receiving RPD reasons</li>
                      <li>Perfecting the appeal: within 30 days</li>
                    </ul>
                    <p>The following persons cannot appeal to the RAD:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Persons from a Designated Country of Origin (DCO)</li>
                      <li>Designated Foreign Nationals (DFN)</li>
                      <li>Persons whose claim was referred as an exception to the Safe Third Country Agreement</li>
                      <li>Persons whose claim was determined to be manifestly unfounded or having no credible basis</li>
                      <li>Persons whose claim was withdrawn or abandoned</li>
                      <li>Persons whose claim was referred to the IRB before the new refugee protection provisions came into force</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* 19. Pre-Removal Risk Assessment */}
              <article id="prra" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Pre-Removal Risk Assessment (PRRA)</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Persons subject to removal orders may apply for PRRA to determine whether evidence indicates more than a mere possibility of persecution, torture, or risk to life upon removal to their country of nationality.</p>
                    <p>Eligible PRRA applicants include:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                      <li>Persons whose refugee claims were rejected (including withdrawn and abandoned)</li>
                      <li>Persons whose refugee claim was ineligible for referral to RPD (except those barred under the Safe Third Country Rule)</li>
                      <li>Individuals who left Canada following a rejected claim or PRRA and returned after more than six months</li>
                      <li>Previous PRRA applicants still in Canada</li>
                      <li>Other individuals facing removal who never previously sought refugee protection</li>
                    </ul>
                    <p>PRRA applications must be submitted within 15 days of receiving notification.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Bottom CTA */}
              <AnimatedSection>
                <div className="mt-16 p-8 bg-blue-950 rounded-2xl text-center">
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">Need Assistance With Any Service?</h3>
                  <p className="text-white/50 mb-6 max-w-lg mx-auto">
                    Please call us or send an Email to make an appointment. Our expert consultant is ready to review your profile.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-400 transition-all"
                    >
                      Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="mailto:lancanimmigration@gmail.com"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                    >
                      Email Resume
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
