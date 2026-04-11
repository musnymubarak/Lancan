import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const categories = [
  {
    name: 'Immigrate',
    sections: [
      { id: 'express', label: 'Express Entry' },
      { id: 'fsw', label: 'Federal Skilled Workers' },
      { id: 'fstp', label: 'Skilled Trade Programme' },
      { id: 'cec', label: 'Canadian Experience Class' },
      { id: 'iese', label: 'Investors & Entrepreneurs' },
      { id: 'fs', label: 'Family Sponsorship' },
      { id: 'pn', label: 'Provincial Nominees' },
      { id: 'refugees', label: 'Refugees' },
      { id: 'citizenship', label: 'Citizenship' },
      { id: 'pcr', label: 'PR Card Renewal' },
    ],
  },
  {
    name: 'Visit & Study',
    sections: [
      { id: 'vc', label: 'Visit Canada' },
      { id: 'sic', label: 'Study in Canada' },
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
      { id: 'iad', label: 'Immigration Appeal Division' },
      { id: 'rcp', label: 'Refugee Claims Process' },
      { id: 'rad', label: 'Refugee Appeal Division' },
      { id: 'prra', label: 'PRRA' },
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
  const [expandedNav, setExpandedNav] = useState<string[]>(['Immigrate']);

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
              Comprehensive immigration solutions covering all pathways to Canada — from Express Entry to Refugee Protection.
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
              {/* ─────── IMMIGRATE ─────── */}
              <div className="mb-8">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-2">// Immigrate to Canada</span>
              </div>

              {/* Express Entry */}
              <article id="express" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Express Entry</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>The Canadian government has introduced a new immigration system that will offer "Express Entry" to qualified immigrants starting from January 1, 2015. The Express Entry is not an immigration program but rather a system used by the Citizenship and Immigration Canada (CIC) to select candidates who are qualified to immigrate to Canada under any of the following key economic immigration programs.</p>
                    <ul>
                      <li>Federal Skilled Worker Program</li>
                      <li>Federal Skilled Trades Program</li>
                      <li>Canadian Experience Class</li>
                      <li>Provincial Nominee Programs (partly)</li>
                    </ul>
                    <p>The candidate eligible to immigrate to Canada under any of the above programs may enter the Express Entry pool by completing an online Express Entry Profile. The candidate are required to provide information about their work experience, language ability, education, age and other personal information. Once the profile is complete the candidate will be given points according to a Comprehensive Ranking System (CRS). The CRS points are based on the following:</p>
                    <ul>
                      <li>Core human capital factors</li>
                      <li>Accompanying spouse or common-law partner factors, if applicable</li>
                      <li>Skill transferability factors</li>
                      <li>Qualifying offer of arranged employment factor</li>
                      <li>Provincial nomination factors</li>
                    </ul>
                    <p>In addition the candidate who do not have an offer of arranged employment or provincial nomination are required to register themselves with the job bank of Canada. The CIC will regularly invite the highest-ranking candidate from the pool to apply to immigrate. Once candidates have been invited to apply for permanent residence, they will need to submit a complete application and will have to meet eligibility and admissibility requirements such as health and security checks. The candidates will have up to 60 days to submit their application online.</p>
                    <p>We as immigration consultants will initially assess your eligibility to apply under any of the above program. If you are eligible we will complete your on line profile and registration with the Canadian Job Bank. Upon receipt of "Invitation to Apply" we will submit your online application for permanent residence.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Federal Skilled Workers */}
              <article id="fsw" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Federal Skilled Workers</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>Under the Federal skill worker programme currently in force in order to satisfy the basic eligibility, the applicant must:</p>
                    <ul>
                      <li>Have one year of continuous full-time (or an equal amount of continuous part-time) paid work experience in one of the eligible occupations within the last 10 years, OR</li>
                      <li>Have a valid offer of arranged employment, OR</li>
                      <li>Be an international student who is enrolled in a PhD programme in Canada or who has graduated from a Canadian PhD programme within the past twelve months</li>
                    </ul>
                    <p>The applicant must also satisfy such minimum requirements as work experience, language and education. Once the applicant meets the above eligibility criteria and minimum requirements the applicant will be assessed against a point system consisting of six selection factors namely level of education, language proficiency, length of work experience, age, arrange employment and adaptability. Those who will reach the pass mark of 67 and over will be eligible for selection as Permanent Residents under the programme.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Federal Skilled Trade Programme */}
              <article id="fstp" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Federal Skilled Trade Programme</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>The Federal Skilled Trades Programme is for people who want to become permanent residents based on being qualified in a skilled trade. The applicant must:</p>
                    <ul>
                      <li>Have at least two years of full time work experience (or an equal amount of part time work experience) in a skilled trade within the five years after becoming qualified to independently practice that occupation</li>
                      <li>Meet the job requirement for that skilled trade as per National Occupation Classification (NOC)</li>
                      <li>Have an offer of full time employment for a total period of at least one year or a certificate of qualification in that skilled trade issued by a provincial or territorial body</li>
                      <li>Meet the required levels in English or French for each language ability</li>
                    </ul>
                    <p>If you satisfy the above criteria, you will be eligible to become a permanent resident of Canada.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Canadian Experience Class */}
              <article id="cec" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Canadian Experience Class</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>Individuals who have gained skilled work experience in Canada, such as temporary foreign workers and foreign students who graduated with a Canadian educational credential, often have the qualities to make a successful transition from temporary to permanent resident status as they are familiar with Canadian society, and have demonstrated the ability to contribute to the Canadian economy.</p>
                    <p>If you are proficient in English or French and have qualifying Canadian work experience, you may be eligible to apply for permanent residence under the Canadian Experience Class. Applications can be submitted by individuals who have at least 12 months of qualifying Canadian work experience in a managerial, professional, skilled trade or technical occupation, and who meet the language proficiency requirements for their occupational skill level.</p>
                    <ul>
                      <li>The one year qualifying work experience (or the equivalent in part-time) in Canada must be in occupations that falls under Skill Type 0, or Skill Level A or B of the National Occupational Classification (NOC)</li>
                      <li>The work experience must have been obtained within the 36 months preceding the date their application is received</li>
                      <li>The required level of English or French language proficiency (speaking, reading, listening and writing) for their occupational skill level</li>
                    </ul>
                    <p>The postsecondary students and temporary workers having the required work experience as above will be eligible to apply under this class. This class is of interest to any international student who has come to Canada to study for a period of two years and work in Canada for at least one year after graduation.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Investors, Entrepreneurs & Self-Employed */}
              <article id="iese" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Investors, Entrepreneurs & Self-Employed</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>The business immigration programme seeks to bring experienced business people to Canada who can make a significant contribution to the thriving Canadian economy. This is a Federal programme which is independent from the Provincial Nominee Programme. Currently there are two streams under which people can immigrate to Canada as Permanent Residents:</p>
                    <ul>
                      <li>Start-up Visa</li>
                      <li>Self Employed Persons</li>
                    </ul>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Start-up Visa</h3>
                    <p>The Start-up programme links immigrant entrepreneurs with experienced private sector organizations who are experts in evaluating business proposals and providing venture capital. To be eligible to receive a Start-up visa the applicant must have a business venture or idea that is supported by one of the following designated organizations:</p>
                    <ul>
                      <li>Designated Venture Capital Fund</li>
                      <li>Designated Angel Investor Group</li>
                      <li>Designated Business Incubators</li>
                    </ul>
                    <p>In addition the applicant must meet the language requirement, one year of post secondary education and sufficient settlement funds.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Self Employed Persons</h3>
                    <p>The self employed persons programme seeks to attract people who will become self employed in Canada. They must have either:</p>
                    <ul>
                      <li>Relevant experience in cultural activities or athletics and be able to make a significant contribution to the cultural or athletic life in Canada</li>
                      <li>Experience in Farm Management and be able to buy and manage a farm in Canada</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Family Sponsorship */}
              <article id="fs" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Family Sponsorship</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>Canadian citizens and Permanent Residents can sponsor the following classes of persons under the Family Sponsorship programme:</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Spouse, Common-Law Partner or Conjugal Partner</h3>
                    <p>A spouse means husband or wife who are legally married. If the marriage took place outside Canada, it should be valid both under the Laws of the jurisdiction where it took place and under the Canadian law. Common-law partner means, in relation to a person, an individual who is cohabiting with the person in a conjugal relationship, having cohabited for a period of one year. Conjugal Partner means, in relation to a sponsor, a foreign national residing outside Canada who is in a conjugal relationship with the sponsor and has been in that relationship for a period of at least one year.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Dependent Children</h3>
                    <p>A sponsor's dependent children includes biological children or legally adopted children who are in one of the following situations of dependency:</p>
                    <ul>
                      <li>Is less than 19 years of age and is not a spouse or common-law partner, OR</li>
                      <li>Is 19 years of age or older and has depended substantially on the financial support of the parent since before the age of 19 and is unable to be financially self-supporting due to a physical or mental condition</li>
                    </ul>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Parents and Grand Parents Scheme</h3>
                    <p>This programme allows Canadian permanent residents and citizens to reunite with their parents and grandparents by way of sponsorship. They can be sponsored to become permanent residents. The parent and grandparents continue to be eligible for a super visa. The permanent residents and citizens have to provide proof that they have financial resources to meet the minimum necessary income (MNI) per household.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Orphans</h3>
                    <p>An orphaned brother, sister, nephew, niece or grandchild who are unmarried and under the age of 18 can be sponsored.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Adopted Persons</h3>
                    <p>Persons under 18 years whom the sponsor intend to adopt in Canada.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Relative of the Sponsor</h3>
                    <p>A relative of the sponsor (anyone connected by blood or adoption) regardless of age if the Sponsor does not have any relative in Canada who is a Canadian or Permanent Resident.</p>

                    <p className="mt-6">Sponsorship application procedure is complex. Both the sponsor and the sponsored persons must meet certain requirements stipulated in the Act and the regulations in order to qualify. The Sponsor must give an undertaking to provide financial assistance to the sponsored person to establish himself financially in Canada.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Provincial Nominees */}
              <article id="pn" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Provincial Nominee Programme</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>Canada has entered into bi-lateral agreements with all provinces (except Quebec) and with the Yukon and Northwest Territories to allow the provinces to nominate individuals to become permanent residents based on the provinces' assessment of the nominees' ability to contribute to the economic growth and development of that province.</p>
                    <p>These nominees must have the skills, education and work experience or adequate capital to set up a business, in order to contribute to the economy of that province or territory. They must agree to settle down in the province from whom they receive the nomination.</p>
                    <p>To apply under the Provincial Nominee Program, the person must:</p>
                    <ul>
                      <li>Be nominated by a specific Canadian province or territory, then</li>
                      <li>Apply to Citizenship and Immigration Canada (CIC) to become a permanent resident of Canada</li>
                    </ul>
                    <p>Each participating province and territory has its own nomination guidelines.</p>
                  </div>
                </AnimatedSection>
              </article>

              {/* Refugees */}
              <article id="refugees" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Refugees & Persons In Need Of Protection</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>Canada grants protection to convention refugees and persons in need of protection under a number of United Nations conventions to which it is a signatory. These include the 1951 Convention Relating to the Status of Refugees and 1967 protocol (1951 Refugee Convention), 1984 Convention Against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Convention Refugee</h3>
                    <p>Convention Refugee is a person who, by reasons of a well founded fear of persecution for reasons of race, religion, nationality, membership in a particular social group or political opinion, is outside his country of nationality and is unable or, by reason of that fear, unwilling to avail himself of the protection of that country.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Person in Need of Protection</h3>
                    <p>A person in need of protection is a person in Canada whose removal to his country of nationality would subject them personally to a danger believed on substantial ground to exist, of torture or to a risk to his life or to a risk of cruel and unusual treatment or punishment.</p>

                    <p>If you are faced with an unfortunate situation requiring you to claim protection as a convention refugee or a person in need of protection, we as Consultants will assist you in every way possible for you to make a refugee claim with the Immigration and Refugee Board (IRB) and appear for you at the hearing of the Refugee Protection Division.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Citizenship */}
              <article id="citizenship" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Citizenship</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>Permanent Residents who are 18 years of age or older are eligible to apply for Canadian Citizenship if they:</p>
                    <ul>
                      <li>Have been physically present in Canada as a permanent resident for at least 1460 days during the six years immediately before the date of application for citizenship. They must also be physically present for at least 183 days during each of four calendar years that are fully or partially within the six years immediately before the date of application.</li>
                      <li>Have met the personal income tax filing obligations in four taxation years that are fully or partially within the six years immediately before the date they apply.</li>
                      <li>Declare that they intend to reside in Canada during the citizenship application process.</li>
                      <li>Show that they have adequate knowledge of either English or French to take part in short, everyday conversations about common topics.</li>
                      <li>Understand the rights, responsibilities and privileges of citizenship, such as voting in elections and obeying the law. Those between 14 to 64 years of age will need to take a citizenship test based on the study guide "Discover Canada: The Rights and Responsibilities of Citizenship."</li>
                    </ul>
                    <p>If an applicant has committed a crime in or outside Canada, he may not be eligible to become a Canadian citizen.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* PR Card Renewal */}
              <article id="pcr" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">PR Card Renewal</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>PR card is a status document. It is a new requirement under the Law to provide PRs and protected persons with a document indicating their status. PR card is normally valid for five years. IRPA imposes a residency obligation on the Permanent Residents.</p>
                    <p>PR complies with residency obligation with respect to a 5 year period if he can demonstrate that he was physically present in Canada 730 days. The period outside Canada is considered as present in Canada if the PR is outside Canada:</p>
                    <ul>
                      <li>Accompanying a Canadian citizen who is Spouse, CLP or a child accompanying parent</li>
                      <li>Employed full time by Canadian business/public service/provincial public service</li>
                      <li>Is an accompanying spouse, CLP or child of a permanent resident who is employed by Canadian Business/public service/provincial public service</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* ─────── VISIT & STUDY ─────── */}
              <div className="mt-20 mb-8">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-2">// Visit & Study</span>
              </div>

              {/* Visit Canada */}
              <article id="vc" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Visit Canada</h2>
                  <div className="prose prose-gray max-w-none">
                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-6 mb-4">Visit as a Tourist</h3>
                    <p>Citizens of certain countries need a visa to visit Canada. This is known as Temporary Resident Visa. Application for such visa must be submitted to the nearest Canadian embassy. Anyone visiting Canada has to convince the immigration officer that he has ties such as a job, financial asset, or family that will take him back to his home country. He must also convince the officer that he will leave Canada at the end of his visit.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Business Visitor</h3>
                    <p>Business visitor is a person who visits Canada to look for ways to grow his business, invest or advance his business relationship with Canadian companies. He must show that he does not plan to enter the labour market in Canada and his principal place of business and source of income and profit is outside Canada. A letter of invitation from a potential business partner in Canada is required.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Parent and Grandparent Super Visa</h3>
                    <p>Parents and Grandparents of Canadian Citizens and Permanent Residents are eligible to apply for a Parent and Grandparent Super Visa. This visa is valid for a period of ten years and will let the applicant visit for up to two years without renewing the status. The applicant must prove that:</p>
                    <ul>
                      <li>Child or grandchild in Canada is either a citizen or permanent resident and meets the minimum requirement of income threshold</li>
                      <li>Child or grand child will provide financial support to the applicant</li>
                      <li>Has a valid Canadian medical insurance coverage for at least one year</li>
                      <li>Passed an immigration medical exam</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Study in Canada */}
              <article id="sic" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Study in Canada</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>To study in Canada as a student you will need a Study Permit. Study Permit is a written authorization issued to foreign students authorizing them to engage in studies in Canada. There are over 125 Universities and Colleges across Canada offering more than 10,000 programmes of study at Undergraduate, Master's and PhD level. In addition there are over 138 Community Colleges and Institutions offering Post-Graduate and Bachelor's degrees.</p>
                    <p>To obtain a study permit, the applicant must:</p>
                    <ul>
                      <li>Have received acceptance from a school, college, university or other institution in Canada for a programme of study</li>
                      <li>Have sufficient money to pay for tuition fees and living expenses during the programme of study</li>
                      <li>Satisfy the immigration officer that he will leave Canada at the end of the authorized period of study</li>
                      <li>Be in good health</li>
                    </ul>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">On Campus Employment</h3>
                    <p>Students of a full time post secondary programme are eligible to work without a work permit on the Campus of the university or college at which they are registered as a full time student.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Off Campus Work</h3>
                    <p>Study permit holders for full time studies in Canada in a Designated Learning Institution are eligible to work off campus without a work permit. They may work 20 hours per week during regular academic sessions and work full time during scheduled breaks such as winter, summer holidays and spring breaks.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Post Graduate Work Permit Programme (PGWP)</h3>
                    <p>This programme allows students who have graduated from a participating post secondary institution to apply for a work permit to work in Canada to gain Canadian work experience. No need for a LMO. The work permit is valid for a maximum of 3 years. International students graduated from any Canadian Post Secondary Institution with Canadian experience are eligible to apply for Permanent Resident Status under various Provincial Nominee Programmes.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* ─────── WORK IN CANADA ─────── */}
              <div className="mt-20 mb-8">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-2">// Work in Canada</span>
              </div>

              {/* Work Permits */}
              <article id="wic" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Work in Canada</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>There are certain jobs in Canada which are exempted from the requirement of a work permit. All other jobs in Canada require a work permit and a positive Labour Market Opinion. The employer who is willing to employ a foreign national needs to get a LMO from the Government of Canada.</p>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Applying for a Work Permit</h3>
                    <p>A person who wants to work in Canada needs normally to apply for a work permit from outside Canada. The most important documents among other documents are:</p>
                    <ul>
                      <li>Job offer or contract from the prospective employer including description of job duties, salary and anticipated job duration</li>
                      <li>Copy of Labour Market Opinion from the government of Canada</li>
                      <li>Evidence that you meet the requirement of the job, such as educational qualifications, experience and Canadian certificates</li>
                    </ul>

                    <h3 className="text-xl font-heading font-bold text-blue-950 mt-8 mb-4">Applying from Inside Canada</h3>
                    <p>A person who is eligible to apply from inside Canada must:</p>
                    <ul>
                      <li>Be currently in Canada and have a valid study/work permit or the spouse possessing a study/work permit</li>
                      <li>Have graduated from a Canadian post secondary institution</li>
                      <li>Have a temporary resident permit valid for six months</li>
                      <li>Have applied for permanent residence within Canada</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Live-in Caregivers */}
              <article id="lic" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Live-in Caregivers</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>Live-in Caregivers are individuals who are qualified to provide care for children, elderly persons or persons with disabilities in private homes without supervision. Live-in Caregivers must live in the private home where they work in Canada.</p>
                    <p>Live-in Caregivers are eligible to apply for permanent residence status if they work at least 24 months or a total of 3900 hours in a minimum of 22 months within the 4 years immediately following the entry. The Live-in Caregiver applicant needs:</p>
                    <ul>
                      <li>A positive Labour Market Opinion (LMO) from an employer in Canada</li>
                      <li>A written contract with the employer signed by both the applicant and employer</li>
                      <li>Successful completion of education equivalent to Canadian Secondary School education</li>
                      <li>At least six months training or one year of full time paid work experience as a caregiver in a related field</li>
                      <li>Good knowledge of English or French</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* ─────── OTHER SERVICES ─────── */}
              <div className="mt-20 mb-8">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-2">// Other Services</span>
              </div>

              {/* Admissibility Hearings */}
              <article id="ah" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Admissibility Hearings</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>Admissibility hearing means a hearing held under section 44(2) of the IRPA concerning a person who is alleged to be inadmissible to Canada or alleged to have violated the provisions of the Act. A permanent resident or foreign national may be inadmissible to Canada due to a variety of reasons such as security, violation of human rights, serious criminality, organized criminality, health grounds, financial reasons, misrepresentation, cessation of refugee protection, non compliance with the Act and inadmissible family member.</p>
                    <p>Admissibility hearing is conducted by a member of the Immigration Division of the Immigration and Refugee Board (IRB). Such a hearing may result in a removal order being issued against the person who is deemed to be inadmissible. The removal order may be a Departure Order, Exclusion Order or Deportation Order depending on the nature of inadmissibility.</p>
                    <p>In the event of an unfortunate situation where you have been issued with a report requiring you to appear at an admissibility hearing it is important for you to contact an Immigration Consultant or a Lawyer to represent you at such a hearing. We as experienced Immigration Consultants will be happy to appear for you and ensure that your rights under the law are protected.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Detention Reviews */}
              <article id="dr" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Detention Reviews</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>An Immigration officer may arrest without a warrant and detain a foreign national if the officer has reasonable grounds to believe that the foreign national is inadmissible and is a danger to the public, or is unlikely to appear for examination or removal from Canada, or has failed to establish his identity.</p>
                    <p>The purpose of the detention review is to determine whether there are valid reasons for the detention and if the member finds that reasons are not valid he must release the person with or without conditions. The first detention review takes place within 24 hours of detention and the second review within 7 days of the first review and thereafter periodically every 30 days.</p>
                    <p>In the event of detention, it is important to contact an Immigration Consultant or a Lawyer to represent you at any of the detention reviews to protect your legal rights.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Immigration Appeal Division */}
              <article id="iad" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Immigration Appeal Division</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>Immigration Appeal Division has jurisdiction to review appeals in the following circumstances:</p>
                    <ul>
                      <li>Sponsor against the refusal of a sponsorship application</li>
                      <li>Foreign national who hold a PR visa against a removal order made at an examination or admissibility hearing</li>
                      <li>Permanent resident or protected person against a removal order</li>
                      <li>Permanent resident against a decision made outside Canada on the non compliance of residency obligation</li>
                      <li>The minister against a decision of an immigration division</li>
                    </ul>
                    <p>Immigration Appeal Division has equitable jurisdiction which may warrant considering an appeal favorably on humanitarian and compassionate considerations even if the decision is valid in law.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Refugee Claims Process */}
              <article id="rcp" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Refugee Claims Process</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>A claim for refugee protection can be made either at a port of entry with the CBSA or at an inland office of the CIC. CBSA officer or CIC officer will determine whether the person making the claim is eligible for referral to Refugee Protection Division of the Immigration and Refugee Board (IRB).</p>
                    <p>Claims are ineligible for referral to IRB if the person:</p>
                    <ul>
                      <li>Has made a previous claim in Canada that was rejected by the IRB</li>
                      <li>Has made a previous claim that was found to be ineligible</li>
                      <li>Has abandoned or withdrawn a previous refugee claim</li>
                      <li>Has got refugee status in another country</li>
                      <li>Is barred under the Safe Third Country Agreement</li>
                      <li>Is inadmissible on security or certain criminality grounds</li>
                    </ul>
                    <p>Date for the refugee hearing has to be fixed within 60 days from the date of referral. At the conclusion of the hearing, the Refugee Protection Division will determine whether the claimant is eligible for convention refugee status or whether he is a person in need of protection. Once recognized, such person is eligible to receive permanent residence status.</p>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* Refugee Appeal Division */}
              <article id="rad" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Refugee Appeal Division</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>A failed refugee claimant has a right to make an appeal to the Refugee Appeal Division against the decision of the Refugee Protection Division. The appeal must be based on a question of Law, of facts or on a question of mixed law and facts.</p>
                    <p>The time limit for filing a notice of appeal is 15 days after the appellant receives the reasons for the decision. Time limit for perfecting an appeal is 30 days.</p>
                    <p>Following persons cannot appeal to RAD:</p>
                    <ul>
                      <li>Person from a Designated Country of Origin (DCO)</li>
                      <li>Person declared as a Designated Foreign National (DFN)</li>
                      <li>Person whose claim was referred as an exception to the Safe Third Country Agreement</li>
                      <li>Person whose claim has been decided as manifestly unfounded or having no credible basis</li>
                      <li>Person whose claim was withdrawn or declared abandoned</li>
                      <li>Person whose claim was referred to the IRB before the coming into force of the new refugee protection provisions</li>
                    </ul>
                  </div>
                  <EmailCTA />
                </AnimatedSection>
              </article>

              {/* PRRA */}
              <article id="prra" className="scroll-mt-28 mb-16">
                <AnimatedSection>
                  <h2 className="text-3xl font-heading font-bold text-blue-950 mb-6 pb-4 border-b border-gray-100">Pre-Risk Removal Assessment (PRRA)</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>Persons who are subject to removal orders can apply for PRRA. The purpose of PRRA is to determine whether the evidence presented indicates that there is more than a mere possibility that the applicant will be at a risk of persecution, torture, or risk to life if removed to their country of nationality.</p>
                    <p>Who can apply for PRRA:</p>
                    <ul>
                      <li>Persons whose refugee claims have been rejected (including those withdrawn and abandoned)</li>
                      <li>Persons whose refugee claim is ineligible for referral to RPD (except those ineligible due to Safe Third Country Rule)</li>
                      <li>Individuals who left Canada following a rejected refugee claim or PRRA and more than six months have passed since departure</li>
                      <li>Previous PRRA applicants who are still in Canada</li>
                      <li>Other individuals who never previously sought refugee protection and now facing removal</li>
                    </ul>
                    <p>PRRA application has to be submitted within 15 days from the receipt of notification.</p>
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
