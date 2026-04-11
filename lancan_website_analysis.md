# LanCan Immigration — Full Website Analysis
**Source:** http://lancanimmigration.com  
**Purpose:** Complete content, navigation, and structural audit for full website recreation  

---

## 1. SITE OVERVIEW

- **Business Name:** LanCan Immigration Consultants (LIC)
- **Type:** Full-service immigration consultancy firm
- **Location:** Ontario, Canada + Sri Lanka branch
- **Brand Color Scheme:** Dark navy/teal primary, white text, gold/yellow accents (based on logo design)
- **CMS/Platform:** WordPress (evident from `/wp-content/uploads/` paths)
- **Footer Credit:** Designed & developed by Cinnamon Media Inc (cinnamonmedia.ca)
- **Copyright:** LanCan Immigration Consultants © 2015-2019

---

## 2. NAVIGATION STRUCTURE

### Primary Navigation Bar (Top)
| Label | URL |
|-------|-----|
| Home | http://lancanimmigration.com/ |
| About | http://lancanimmigration.com/#about (anchor on homepage) |
| Services | http://lancanimmigration.com/services/ |
| News | http://lancanimmigration.com/news/ |
| Contact | http://lancanimmigration.com/#contact1 (anchor on homepage) |

### Mega Menu — "IMMIGRATE" Dropdown
| Label | URL Anchor |
|-------|------------|
| Express Entry | /services/#express |
| Federal Skilled Workers | /services/#fsw |
| Federal Skilled Trade Programme | /services/#fstp |
| Canadian Experience Class | /services/#cec |
| Investors, Entrepreneurs and Self Employed | /services/#iese |
| Family Sponsorship | /services/#fs |
| Refugees | /services/#refugees |
| Provincial Nominees | /services/#pn |
| Citizenship | /services/#citizenship |
| PR Card Renewal | /services/#pcr |

### Mega Menu — "VISIT & STUDY" Dropdown
| Label | URL Anchor |
|-------|------------|
| Visit as a tourist | /services/#vc |
| Visit your children & grand children (Super Visa) | /services/#vc |
| Extension of visitor visa | /services/#vc |
| Visit on business | /services/#vc |
| Study permit for education in Canada | /services/#sic |
| Extend study permits | /services/#sic |
| Student work permits | /services/#wic |

### Mega Menu — "WORK IN CANADA" Dropdown
| Label | URL Anchor |
|-------|------------|
| Temporary workers | /services/#wic |
| Live in Caregivers | /services/#lic |

### Mega Menu — "Other Services" Dropdown
| Label | URL Anchor |
|-------|------------|
| Admissibility Hearings | /services/#ah |
| Detention Reviews | /services/#dr |
| Immigration Appeal Division | /services/#iad |
| Refugee Claims Process | /services/#rcp |
| Refugee Appeal Division | /services/#rad |
| Pre Risk Removal Assessment (PRRA) | /services/#prra |

---

## 3. PAGES INVENTORY

| Page | URL | Type |
|------|-----|------|
| Home | / | Single-page with anchored sections |
| Services | /services/ | Full services page with anchor sections |
| News | /news/ | Single article (Bill C-6) |
| Contact | /#contact1 or /contact.html | Section / legacy HTML page |
| About | /#about or /About.html | Section / legacy HTML page |
| Privacy Policy | /index-5.html | Legacy HTML |

> **Note:** The site has a legacy HTML version (`/About.html`, `/contact.html`, `/services.html`, `/Canadian-citizenship-act2.html`) that predates the current WordPress build. The WordPress build uses anchor-based sections on homepage for About and Contact.

---

## 4. HOMEPAGE SECTIONS (in order)

### 4.1 Header / Navbar
- Logo: `wp-content/uploads/2020/03/final-logo.png`
- Navigation as described in Section 2 above
- Sticky header (implied by WordPress theme)

### 4.2 Hero Section
- **Background Image:** `wp-content/uploads/2020/03/4w.jpg` (full-width banner image)
- **Headline:** "Welcome To LANCAN"
- **Body Text:**
  > LanCan Immigration Consultants (LIC) is a full service immigration consultancy firm in Ontario, Canada. LIC is headed by a Regulated Canadian Immigration Consultant with over 30 years of experience in the field of Law and Immigration. With our thorough understanding of the immigration law, immigration manuals, the complexities involved in the process and updated knowledge of the ever changing requirements, we are best suited for undertaking your immigration needs. Please call us or send an Email to us to make an appointment.

### 4.3 "Who We Are?" Section
- **Heading:** "Who We Are?"
- **Body Text:**
  > We dedicate ourselves to service excellence and professionalism. We focus on providing affordable, effective and expeditious immigration solutions to those wish to immigrate, study, work, establish business or visit Canada. Our services include the areas listed here.
- **CTA Buttons:**
  - [LEARN MORE] → http://lancanimmigration.com/services/
  - [LATEST IMMIGRATION NEWS] → http://lancanimmigration.com/news/

### 4.4 About Us Section (anchor: `#about`)
- **Section Heading:** "About Us"
- **Profile Image:** `http://www.lancanimmigration.com/wp-content/uploads/2019/10/pic.jpg`
- **Name:** CHANDRALAL ATTANAPOLA
- **Title:** Managing Director
- **Full Bio:**
  > Chandralal Attanapola, LL.B, LL.M, RCIC is a Regulated Canadian Immigration Consultant of Immigration Consultants of Canada Regulatory Council (ICCRC). He is Managing Director of LanCan Immigration Consultants which provides immigration consultancy services.
  >
  > He is also an Attorney-at Law of the Supreme Court of Sri Lanka with over 30 years of experience in the fields of Law, Insurance and Shipping. He possessed senior management experience both in the private and public sector in Sri Lanka.
  >
  > Prior to becoming an Immigration Consultant, Chandralal has practiced as litigation counsel in both the original and appellate courts in Sri Lanka. Previously he worked as Director General of the Textile Quota Board, Assistant General Manager of Union Assurance Plc in Sri Lanka and Underwriting Manager at Arab Orient Insurance Company, United Arab Emirates. He worked in Canada as Bodily Injury Claim Specialist at York Fire and Casualty Insurance Company in Mississauga.
  >
  > During his multi faceted career Chandralal has travelled overseas widely on official duty representing Sri Lanka in promoting trade and investment, shipping, and Insurance business.

### 4.5 "Qualified To Represent You" Section
- **Heading:** "Qualified To Represent You"
- **ICCRC Logo Image:** `http://www.lancanimmigration.com/wp-content/uploads/2019/10/logo-iccrc.jpg`
- **Text Block 1:**
  > Chandralal Attanapola is a Regulated Canadian Immigration Consultant of the Immigration Consultant of Canada Regulatory Council (ICCRC).
  > ICCRC is the only regulatory body for the Immigration Consultants in Canada. Citizenship and Immigration Canada (CIC) has recognized members of the ICCRC as authorized representatives who can represent people on immigration matters.
- **Text Block 2:**
  > We in our free assessment session carefully assess your circumstance and qualifications and let you have our preliminary opinion whether you would qualify for applying to Canada to become a permanent resident, for study, for work or any other programme you have in mind.
  > If you do not qualify we will let you know in the first available opportunity so that you need not pay fees unnecessarily.
- **CTA Link:** [Read more..] → http://lancanimmigration.com/services

### 4.6 Contact Section (anchor: `#contact1`)
- **Section Heading:** "Contact"
- **Phone (Canada):** +1 647 673 7569 (clickable tel: link)
- **Address (Canada):** LanCan Immigration Consutants, 402-2 County Court Blvd, Brampton, ON, L6W 3W8 Canada
- **Sub-heading:** "Sri Lanka Branch"
- **Address (Sri Lanka):** 73/10 Saman Uyana Kumaragewatta, Battaramulla, Sri Lanka
- **Phone (Sri Lanka - Office):** +94 11 2796 210
- **Phone (Sri Lanka - Mobile):** +94 773 407 427
- **Email:** lancanimmigration@gmail.com

---

## 5. SERVICES PAGE (/services/)

Services page uses in-page anchor sections. Each service category is a section with `id` corresponding to the nav dropdowns.

### Section Anchors Map
| Anchor ID | Service |
|-----------|---------|
| `#express` | Express Entry |
| `#fsw` | Federal Skilled Workers |
| `#fstp` | Federal Skilled Trade Programme |
| `#cec` | Canadian Experience Class |
| `#iese` | Investors, Entrepreneurs and Self Employed |
| `#fs` | Family Sponsorship |
| `#refugees` | Refugees |
| `#pn` | Provincial Nominees |
| `#citizenship` | Citizenship |
| `#pcr` | PR Card Renewal |
| `#vc` | Visit Canada (tourist, super visa, extension, business) |
| `#sic` | Study in Canada |
| `#wic` | Work in Canada / Temporary Workers / Student Work Permits |
| `#lic` | Live in Caregivers |
| `#ah` | Admissibility Hearings |
| `#dr` | Detention Reviews |
| `#iad` | Immigration Appeal Division |
| `#rcp` | Refugee Claims Process |
| `#rad` | Refugee Appeal Division |
| `#prra` | Pre Risk Removal Assessment (PRRA) |

### Service Content Details

#### Express Entry
> The CIC will regularly invite the highest-ranking candidate from the pool to apply to immigrate. Once candidates have been invited to apply for permanent residence, they will need to submit a complete application and will have to meet eligibility and admissibility requirements such as health and security checks. The candidates will have up to 60 days to submit their application online. We as immigration consultants will initially assess your eligibility to apply under any of the above program. If you are eligible we will complete your on line profile and registration with the Canadian Job Bank. Upon receipt of "Invitation to Apply" we will submit your online application for permanent residence.
>
> **CTA:** For an assessment of your eligibility under any of the economic programs and assistance with an Express Entry Profile please Email your resume to info@lancanimmigration.com.

#### Federal Skilled Workers
> Once the applicant meets the above eligibility criteria and minimum requirements the applicant will be assessed against a point system consisting of six selection factors namely level of education, language proficiency, length of work experience, age, arranged employment and adaptability. Those who will reach the pass mark of 67 and over will be eligible for selection as Permanent Residents under the programme.
>
> **CTA:** For a free assessment of your eligibility, please e mail your complete resume to info@lancanimmigration.com.

#### Federal Skilled Trade Programme
> The Federal Skilled Trades Programme is for people who want to become permanent residents based on being qualified in a skilled trade. The applicant must:
> - have at least two years of full time work experience (or an equal amount of part time work experience) in a skilled trade within the five years after becoming qualified to independently practice that occupation.
>
> **CTA:** For a free assessment of your eligibility, please e mail your complete resume to info@lancanimmigration.com.

#### Canadian Experience Class
> The postsecondary students and temporary workers having the required work experience as above will be eligible to apply under this class. This class is of interest to any international student who has come to Canada to study for a period of two years and work in Canada for at least one year after graduation.
>
> **CTA:** For a free assessment of your eligibility, please email your complete resume to info@lancanimmigration.com.

#### Investors, Entrepreneurs and Self Employed
> The business immigration programme seeks to bring experienced business people to Canada who can make a significant contribution to the thriving Canadian economy. This is a Federal programme which is independent from the Provincial Nominee Programme. Currently there are two streams under which people can immigrate to Canada as Permanent Residents. They are:
> - The Start-up programme links immigrant entrepreneurs with experienced private sector organizations who are experts in evaluating business proposals and providing venture capital.
>
> **CTA:** For a free assessment of your eligibility, please e mail your complete resume to info@lancanimmigration.com.

#### Family Sponsorship
> Canadian citizens and Permanent Residents can sponsor the following classes of persons under the Family Sponsorship programme:
> - A spouse means husband or wife who are legally married. If the marriage took place outside Canada, it should be valid both under the Laws of the jurisdiction where it took place and under the Canadian law.
> - Common-law partner means, in relation to a person, an individual who is cohabiting with the person in a conjugal relationship, having cohabited for a period of one year.
> - Conjugal Partner means, in relation to a sponsor, a foreign national residing outside Canada who is in a conjugal relationship with the sponsor and has been in that relationship for a period of at least one year.
> - A sponsor's dependent children includes biological children or legally adopted children who are in one of the following situations of dependency.
>
> **CTA:** For a free assessment of your eligibility, please e mail your complete resume to info@lancanimmigration.com.

#### Refugees
> Canada grants protection to convention refugees and persons in need of protection under a number of United Nations conventions to which it is a signatory. These include:
> - 1951 Convention Relating to the Status of Refugees and 1967 protocol (1951 Refugee Convention)
> - 1984 Convention Against Torture and Other Cruel, Inhuman or Degrading Treatment or punishment
>
> The obligation that flows from these instruments are reflected in the Immigration and Refugee Protection Act.
>
> Convention Refugee is a person who, by reasons of a well founded fear of persecution for reasons of race, religion, nationality, membership in a particular social group or political opinion, is outside his country of nationality and is unable or, by reason of that fear, unwilling to avail himself of the protection of that country.

---

## 6. NEWS PAGE (/news/)

### Article: "Bill To Amend The Canadian Citizenship Act"

**Full Content:**

Bill to amend the Canadian Citizenship Act, which is known as Bill C-6, has been passed by the Canadian House of Commons following its third reading. It will soon become the law once the senate has approved the proposed amendments and Royal assent is granted.

The government has proposed important changes to the Citizenship Act that would allow immigrants to apply for Canadian citizenship earlier and easier than is currently the case. The new bill mostly reverses changes made under the previous Bill C-24, which took effect in 2015.

**Important changes in the proposed amendment (Bill C-6):**

1. Under the proposed amendments in Bill C-6, the amount of time permanent residents have to live in Canada to become eligible to apply for citizenship has been reduced to three out of five years. (Under the current law this is four out of six years)
2. In addition half of the time spent in Canada on temporary basis, such as temporary resident or protected person will be counted towards meeting the physical presence requirement subject to a maximum of one year. (The Current law has no provision to count the time spent in Canada as a temporary resident)
3. Under the proposed legislation only those applicants between the age group of 18-54 are required to meet the language requirement and pass the citizenship test. (Presently permanent residents between the ages of 14-65 are required to meet the language requirement and citizenship test)
4. The proposed law would repeal the provisions of intent to reside in Canada and 183 days of physical presence in any four of the six years currently in effect.

---

## 7. CONTACT PAGE (/contact.html — legacy)

Also available as anchor `#contact1` on homepage.

**Three value proposition taglines (displayed in slider/rotator):**
1. *Dedicated* **to customer service**
2. *Expertise* **to exceed expectations**
3. *Personal* **Attention**

**Canada Office:**
- LanCan Immigration Consutants
- 402-2 County Court Blvd
- Brampton, ON, L6W 3W8 Canada
- Telephone: +1 647 673 7569

**Sri Lanka Branch:**
- 73/10 Saman Uyana Kumaragewatta
- Battaramulla, Sri Lanka
- Telephone: +94 11 2796 210
- Mobile: +94 773 407 427
- Email: lancanimmigration@gmail.com

**Map Section:** Embedded Google Map (location: Brampton, ON address)

---

## 8. ABOUT PAGE (/About.html — legacy)

Same bio as homepage About section (Section 4.4 above).

### Services Offered List (as linked sidebar/list)
All service pages from legacy HTML version:
- [Federal Skilled Workers] → /federal-skilled-worker.html
- [Federal Skilled Trade Programme] → /federal-skilled-trade.html
- [Canadian Experience Class] → /cec.html
- [Investors, Entrepreneurs and Self Employed] → /investors.html
- [Family Sponsorship] → /family-sponsorships.html
- [Provincial Nominees] → /Provincial-nominee.html
- [Live-in Caregivers] → /Caregivers.html
- [Refugees] → /refugees.html
- [Visit Canada] → /Visit-Canada.html
- [Work in Canada] → /work-in-canada.html
- [Study in Canada] → /Study-in-Canada.html
- [Citizenship] → /Citizenship.html
- [PR Card Renewal] → /PR-Renewal.html
- [Other Services] → /Other-services.html

---

## 9. FOOTER

### Footer Logo
- Image: `wp-content/uploads/2019/11/Logow-200x65.png` (white version of logo, 200x65px)
- Link: → http://lancanimmigration.com

### Footer Text
- "LanCan Immigration Consultants © 2015-2019"
- "Designed & developed by Cinnamon Media Inc"

### Footer Address Block (Two columns)

**Left / Canada:**
- LanCan Immigration Consutants
- 402-2 County Court Blvd
- Brampton, ON, L6W 3W8 Canada.
- +1 647 673 7569 (tel link)
- lancanimmigration@gmail.com (mailto link)

**Right / Sri Lanka:**
- Sri Lanka Branch
- 73/10 Saman Uyana Kumaragewatta
- Battaramulla, Sri Lanka
- +94 11 2796 210 (tel link)
- +94 773 407 427 (tel link)

---

## 10. MEDIA / ASSETS INVENTORY

| Asset | URL |
|-------|-----|
| Primary logo (color) | /wp-content/uploads/2020/03/final-logo.png |
| Footer logo (white) | /wp-content/uploads/2019/11/Logow-200x65.png |
| Hero background image | /wp-content/uploads/2020/03/4w.jpg |
| Managing Director photo | /wp-content/uploads/2019/10/pic.jpg |
| ICCRC logo | /wp-content/uploads/2019/10/logo-iccrc.jpg |
| Legacy profile photo | /images/pic.jpg |
| Legacy ICCRC logo | /images/logo-iccrc.jpg |
| Legacy about image | /images/page2-img3.jpg |

---

## 11. TECHNICAL NOTES FOR RECREATION

1. **WordPress Theme:** Custom or lightly customized theme — the mega-nav with 4 dropdown groups is custom. Recommend rebuilding in Next.js or similar.
2. **Two legacy versions exist:** Old HTML site (`/About.html`, `/contact.html`, `/services.html`) and newer WordPress build. WordPress version is the live primary site.
3. **Contact form:** No visible form in current site — contact is email/phone based. If recreating, add a contact form.
4. **News section:** Currently only one article (Bill C-6). Suggest a proper blog/news CMS setup.
5. **Services page:** Uses anchor-based single-page navigation — all service content on one scrollable page, not individual pages.
6. **Missing services content:** The following services are referenced in nav/lists but no body content was retrievable: Provincial Nominees, Citizenship, PR Card Renewal, Visit Canada, Study in Canada, Work in Canada, Live-in Caregivers, Admissibility Hearings, Detention Reviews, IAD, RCP, RAD, PRRA. These may exist in the live WordPress page but were not accessible in this crawl.
7. **Google Map embed** needed on Contact page for Brampton, ON address.
8. **Email links** on site inconsistently use `info@lancanimmigration.com` (in service CTAs) and `lancanimmigration@gmail.com` (in contact/footer). Clarify with client which is the active address.

---

## 12. REFERENCE DESIGN STYLE GUIDE
**Reference URL:** https://themexriver.com/wp/vistro/home-03-onepage/  
**Theme Name:** Vistro — Immigration Consulting WordPress Theme  
**Layout Type:** One-page with anchor-based navigation (matches LanCan's existing structure — no architecture change needed)

---

### 12.1 Visual Design System

#### Color Palette (inferred from Vistro Home 03)
| Role | Description |
|------|-------------|
| Primary | Deep navy / dark blue (hero background, section accents) |
| Accent | Golden yellow / amber (CTA buttons, highlights, section tag pills) |
| Text Dark | Near-black (#1a1a2e range) for headings |
| Text Body | Medium gray for paragraphs |
| Background Light | Off-white / very light gray for alternating sections |
| Background Dark | Deep navy for CTA strips and footer |
| White | Card backgrounds, navbar background on scroll |

#### Typography
| Element | Style |
|---------|-------|
| Section tag (e.g. "// ABOUT US") | Small caps, spaced, accent color, above headings |
| H1 Hero | Large bold serif or heavy sans, 2-line max |
| H2 Section headings | Bold sans, ~40–48px |
| H3 Card titles | Medium weight, ~22–26px |
| Body text | Regular weight, ~16px, gray |
| CTA buttons | Rounded pill or sharp rectangle, accent bg, uppercase label |

#### Spacing & Layout
- Full-width sections with generous top/bottom padding (~100px)
- Max content width ~1200px centered
- Cards use subtle box shadow and hover lift effect
- Section tag + H2 heading is the consistent section intro pattern throughout

---

### 12.2 Homepage Section Map (Reference Design → LanCan Mapped)

| # | Reference Section | LanCan Content Mapped |
|---|------------------|-----------------------|
| 1 | **Sticky Navbar** — logo left, anchor links center, phone + email right | Logo, Home/About/Services/News/Contact + +1 647 673 7569 |
| 2 | **Hero** — eyebrow text, bold H1, 3 visa topic pills, CTA button, 3 stacked images right | "Best Immigration & Visa Consultation." / "Leading Immigration Consulting Firm." / topic pills: Express Entry, Family Sponsorship, Work Permit |
| 3 | **Partner Logos Strip** — scrolling logo bar | ICCRC logo + other certification/partner logos |
| 4 | **About Section** — 2-col: left image with play button overlay, right: eyebrow, H2, 2 feature rows, CTA | Chandralal's photo + "Help You From Start To End Immigration." bio text + 2 key traits |
| 5 | **Services Grid** — eyebrow, H2, 4 service cards each with image, title, short desc, link | Student Visa→ Express Entry / Family Visa→ Family Sponsorship / Tourist Visa→ Visit Canada / Business Visa→ Business Immigration |
| 6 | **Pull Quote Banner** — full-width dark bg, large italic quote | "Qualified To Represent You" ICCRC credential statement |
| 7 | **Discount/Offer CTA** — eyebrow, H2, bullet list, stat highlight, CTA button, background image | "Free Assessment Session" — assessment offer section |
| 8 | **Benefits + Countries** — H2, bullet points, 4-image collage, flag+country grid | Canada, Sri Lanka focus — with flag icons |
| 9 | **Team Section** — eyebrow, H2, team cards (photo, role tag, name, phone, email) | Chandralal Attanapola — Managing Director — RCIC |
| 10 | **CTA Banner** — dark bg, 2-col: bold headline left, button + phone right | "Get Your Free Consultation" / +1 647 673 7569 |
| 11 | **Stats Counter Row** — 3 animated counters | e.g. 30+ Years Experience / 500+ Cases Handled / 2 Office Locations |
| 12 | **FAQ Accordion** — eyebrow, H2, expandable Q&A items | Immigration process questions, document requirements, eligibility, etc. |
| 13 | **News/Blog Cards** — eyebrow, H2, 2-col cards with date badge, title, excerpt, CTA link | Bill C-6 article + future news posts |
| 14 | **Testimonials Slider** — photo, name, role, quote | Client testimonials (content TBD from client) |
| 15 | **Contact Section** — eyebrow, H2, 2-col: left contact info + bullet list, right: contact form | Canada + Sri Lanka addresses, phone, email |
| 16 | **Footer** — logo, tagline, 4 columns, social icons, copyright | LanCan logo, Services / Useful Links / Trending Posts / Instagram Grid |

---

### 12.3 Navbar Design (Reference)
- **Sticky on scroll** with background color transition (transparent → white/dark on scroll)
- **Logo:** top-left
- **Nav links:** centered, anchor-based (#home, #about, #services, #team, #blog, #contact)
- **Top-right utility:** phone number + email displayed inline
- **Mobile:** hamburger collapse to full-screen or slide-down menu
- **Active state:** underline or accent color on current section

> **LanCan difference:** Add the mega-menu dropdowns for IMMIGRATE / VISIT & STUDY / WORK IN CANADA / Other Services on top of this navbar pattern. The reference design uses simple links — LanCan needs dropdown groups. Use a hover mega-menu panel for desktop, accordion for mobile.

---

### 12.4 Hero Section Design (Reference)
- **Left column (60%):**
  - Eyebrow pill: `// Best Immigration & Visa Consultation.`
  - H1: `Leading Immigration Consulting Firm.`
  - 3 visa category pills (icon + label, horizontal row)
  - Single CTA button: `Free Consultation`
- **Right column (40%):**
  - 3 stacked/offset portrait images
  - Decorative background shape
- **Full-width background:** Dark navy or gradient

> **LanCan mapping:** Replace pill topics with Express Entry, Family Sponsorship, Visit Canada. Replace images with relevant Canada/immigration imagery. Hero CTA → mailto or contact anchor.

---

### 12.5 Services Section Design (Reference)
- Layout: 2×2 grid (4 cards) or horizontal scroll on mobile
- Each card:
  - Full-bleed background image
  - Overlay gradient (bottom-up dark)
  - Service title (H3, white)
  - Short 1-line description
  - "Learn More" arrow link

> **LanCan mapping:** Use 4 primary service groups as cards: Immigrate to Canada / Visit & Study / Work in Canada / Other Services. Each card links to the respective anchor on /services page.

---

### 12.6 Team Section Design (Reference)
- Layout: Horizontal card slider (carousel)
- Each card:
  - Role tag (small, accent color) — e.g. "consultant", "immigration", "documentation"
  - Portrait photo
  - Name (H5)
  - Phone + Email links

> **LanCan mapping:** Single team member (Chandralal Attanapola). Show role: "Regulated Canadian Immigration Consultant (RCIC)". Phone: +1 647 673 7569. Add ICCRC badge/logo on card.

---

### 12.7 Stats Counter Section (Reference)
- Dark background strip (navy)
- 3 animated number counters:
  - `210K` company clients
  - `9684` company awards
  - `590+` complete projects

> **LanCan mapping:** Replace with realistic figures from client:
> - `30+` Years of Legal Experience
> - `500+` Successful Applications (confirm with client)
> - `2` Office Locations (Canada + Sri Lanka)
> - `100%` RCIC Certified

---

### 12.8 FAQ Accordion Section (Reference)
- Light background
- Left: eyebrow + H2 + decorative image
- Right: expandable accordion items
- Each item: bold question, paragraph answer on expand
- Only one item open at a time

> **LanCan FAQ suggestions (get client to confirm/expand):**
> 1. What is Express Entry and am I eligible?
> 2. What documents are required for a Permanent Residence application?
> 3. How long does the immigration process take?
> 4. Can I sponsor my family members to come to Canada?
> 5. What is the difference between RCIC and a lawyer for immigration?
> 6. Do you offer free initial assessments?

---

### 12.9 News/Blog Cards (Reference)
- Section eyebrow: `// RECENT NEWS FEED`
- H2: `Latest News From The Blog`
- 2-column card layout
- Each card:
  - Thumbnail image (left or top)
  - Date badge (day + month overlay on image)
  - Article title (H4, linked)
  - Short excerpt text
  - `Get Free Consultation` CTA link

> **LanCan mapping:** Use Bill C-6 article as first card. Add placeholder for additional news posts. Date: shown on image corner.

---

### 12.10 Footer Design (Reference)
- **Top footer:** Dark navy background, 4-column grid
  - Col 1: Logo + tagline + social icons (Facebook, Twitter, Pinterest, Instagram)
  - Col 2: "Our Services" link list
  - Col 3: "Useful Links" link list
  - Col 4: "Trending Posts" — 2 thumbnail + title + date items + Instagram photo grid (3×3)
- **Bottom footer:** Single row — copyright text left, possibly nav links right

> **LanCan mapping:**
> - Col 1: LanCan white logo + "Full service immigration consultancy firm in Ontario, Canada." + social icons
> - Col 2: Services links (Express Entry, Family Sponsorship, Visit Canada, Work in Canada, Refugees, etc.)
> - Col 3: Useful Links (About, News, Contact, Privacy Policy)
> - Col 4: Latest News posts (Bill C-6 + next article) — no Instagram grid unless client provides

---

### 12.11 Contact Section Design (Reference)
- Dark/navy background section
- Eyebrow: `// CONTACT US`
- H2: heading
- Left column: address bullet points, phone CTA
- Right column: contact form (Name, Email, Subject, Message, Submit button)
- Form submit → email or backend handler

> **LanCan mapping:**
> - Left: Canada address + Sri Lanka address + phone numbers + email
> - Right: Contact form (new — not on original site)
> - Embed Google Map below or as a separate strip

---

## 13. RECOMMENDED PAGE STRUCTURE FOR RECREATION

```
/                          → Homepage (one-page, all anchor sections per Vistro style)
  #home                    → Hero
  #about                   → About + ICCRC credentials
  #services                → 4-card service overview
  #team                    → Chandralal profile card
  #stats                   → Counter strip
  #faq                     → Accordion FAQ
  #blog                    → News cards
  #contact                 → Contact form + address

/services                  → Full services detail page (anchor sections)
  #express, #fsw, #fstp, #cec
  #iese, #fs, #refugees, #pn
  #citizenship, #pcr
  #vc, #sic, #wic, #lic
  #ah, #dr, #iad, #rcp, #rad, #prra

/news                      → News listing page
/news/[slug]               → Individual news article
/privacy-policy            → Privacy policy page
```

### Tech Stack Recommendation
| Concern | Recommendation |
|---------|---------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS variables for Vistro color system |
| Animations | Framer Motion for counters, fade-ins |
| Mega menu | Custom React state with Tailwind |
| Contact form | React Hook Form + API route → Nodemailer or Resend |
| CMS (news) | MDX files (Contentlayer) or Sanity for client self-management |
| Deployment | Vercel |
| Map | Google Maps Embed API (free tier) |
