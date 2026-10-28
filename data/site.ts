// Site-wide content and settings.
export const site = {
  company: "CXO Lounge Pvt Ltd",
  brand: "CIO Lounge",
  tagline: "Innovate | Influence | Impact",
  description:
    "CIO Lounge is India's premier executive platform for CIOs, CTOs, CISOs, CDOs and the technology ecosystem — curated roundtables, learning with top institutions, veteran CIO advisory and premier sports properties for IT leaders.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ciolounge.in",
  email: "kamal@ciolounge.in",
  phone: "+91 98200 00000",
  address: "Mumbai, Maharashtra, India",
  linkedin: "https://www.linkedin.com/company/ciolounge",
  founder: {
    name: "Kamal Goel",
    role: "Founder & Managing Director",
    title: "Founder, CXO Lounge & CIO Lounge",
    bio: "Enterprise technology leader with over 28 years of distinguished track record as Group CIO and Head of IT across leading organisations including Yotta Infrastructure, Hitachi Systems India, 63 Moons Technologies, and Anand Rathi Securities. A recognized pioneer in cloud infrastructure, cybersecurity governance, mission-critical systems, and digital strategy. Kamal founded CIO Lounge to build an authentic, peer-led sanctuary for technology leaders — connecting CIOs with peers and partners with mutual respect, trust, and lasting impact.",
    experience: ["Yotta Infrastructure", "Hitachi Systems", "63 Moons Technologies", "Anand Rathi Securities", "28+ Yrs Enterprise IT"],
    email: "kamal@ciolounge.in",
  },
  cxo: {
    name: "Shikha Goel",
    role: "CXO (Chief Experience Officer)",
    title: "Chief Experience Officer, CXO Lounge",
    bio: "Executive leader orchestrating overall member experience, strategic alliances, luxury hospitality partnerships (including Taj and ITC Hotels), and community excellence across national chapters. She spearheads the executive lifestyle and sports initiatives, ensuring every CIO Lounge gathering delivers seamless hospitality, peer camaraderie, and family-friendly engagement.",
    experience: ["Executive Leadership", "Strategic Alliances", "Luxury Hospitality Partnerships", "CXO Community Programs"],
  },
};

export const nav = [
  { href: "/events", label: "Events" },
  { href: "/sports", label: "Sports" },
  { href: "/members", label: "Members", locked: true },
  { href: "/membership", label: "Membership" },
  { href: "/partners", label: "Partner with us" },
  { href: "/about", label: "About" },
];

export const footerNav = {
  Platform: [
    { href: "/events", label: "Events" },
    { href: "/members", label: "Member directory" },
    { href: "/membership", label: "Membership" },
    { href: "/advisory", label: "Veteran CIO Advisory" },
    { href: "/learning", label: "Learning programmes" },
  ],
  "CXO Lounge": [
    { href: "/about", label: "About us" },
    { href: "/studio", label: "CIO Studio" },
    { href: "/foundation", label: "CIO Foundation" },
    { href: "/partners", label: "Partner with us" },
    { href: "/contact", label: "Contact" },
  ],
  Sports: [
    { href: "/pickleball-league", label: "CIO Pickleball League" },
    { href: "/golf-tour", label: "CIO Golf Tour" },
    { href: "/premier-league", label: "CIO Premier League" },
    { href: "/sports", label: "All sports properties" },
  ],
};

export const headlineStats = [
  { value: "5–7", label: "cities on the India Tour" },
  { value: "250–400", label: "enterprise decision-makers" },
  { value: "CXO-only", label: "CIOs, CTOs, CISOs and CDOs" },
  { value: "0%", label: "commission on partner deals" },
];

export const principles = [
  {
    title: "Partners are customers. CIOs are peers.",
    body: "Vendors and system integrators sponsor the platform; CIOs are members of the community. The two roles never blur, ensuring trust and authenticity.",
  },
  {
    title: "No commissions, ever",
    body: "We earn from structured sponsorships and annual memberships — never from the deals partners close with our members. Our neutrality is sacred.",
  },
  {
    title: "Exclusivity by invitation & merit",
    body: "Membership is reserved for verified enterprise technology leaders through peer review and curated invitations. It keeps the room senior, the conversations authentic, and our members never the product.",
  },
  {
    title: "Sponsors and delegates, side by side",
    body: "No transactional wall between the two. Partners take part on the same footing as CIOs in curated rooms, so networking and architectural discussions are genuine.",
  },
];

export const platforms = [
  {
    key: "lounge",
    name: "CIO Lounge",
    kicker: "The community",
    body: "A multi-platform ecosystem for CIOs and technology leaders: professional engagements, learning, advisory, sport and lifestyle.",
    href: "/membership",
  },
  {
    key: "studio",
    name: "CIO Studio",
    kicker: "Where CIOs speak. Technology connects.",
    body: "The voice of the community — perspectives, conversations and case notes from the people who run India's technology.",
    href: "/studio",
  },
  {
    key: "foundation",
    name: "CIO Foundation",
    kicker: "Future social-impact initiative",
    body: "The giving-back dimension of CIO Lounge, funded by 2% of CIO-vertical revenue to support tech leaders' families and noble causes.",
    href: "/foundation",
  },
];

export const marketProblem = [
  {
    value: "~125",
    label: "CIO forums, media platforms and agencies competing for the same leaders in India with generic conference formats",
    subtext: "The Commoditized Event Trap",
  },
  {
    value: "2 a month",
    label: "events many CIOs attend — often feeling like passive audiences to product sales pitches rather than collaborative problem-solvers",
    subtext: "Executive Fatigue",
  },
  {
    value: "~35",
    label: "genuine buyers at a typical 140-CIO flagship event, pursued by 89 sponsors with minimal measurable ROI",
    subtext: "Diluted ROI for Partners",
  },
];
