// Membership plans, benefits and FAQ. Curated by invitation and application.

export const memberBenefits = [
  { icon: "users", title: "Professional engagements", body: "Curated roundtables where you shape products, not sit through pitches." },
  { icon: "graduation", title: "Learning with top institutions", body: "Residential programmes designed with faculty and supported by partners." },
  { icon: "trophy", title: "Sports", body: "The CIO Pickleball League India Tour, coaching and member tournaments." },
  { icon: "heart", title: "Health and wellness", body: "Wellness zones, fitness sessions and health programmes." },
  { icon: "sparkles", title: "Lifestyle", body: "Hospitality with ITC and Taj, and experiences worth your weekend." },
  { icon: "home", title: "Family and wealth programmes", body: "Family days, kids' activities and wealth sessions." },
  { icon: "key", title: "Premium concierge", body: "A dedicated desk for event logistics and member requests." },
  { icon: "plane", title: "Travel perks", body: "Destination events, starting with the National Grand Finale." },
  { icon: "party", title: "Recreation and entertainment", body: "Live entertainment, celebrations and member evenings." },
  { icon: "shield", title: "Veteran CIO advisory", body: "Access to a panel of retired CIOs for independent counsel." },
] as const;

export interface Plan {
  id: string;
  name: string;
  access: string;
  note?: string;
  audience: string;
  cta: string;
  href: string;
  highlight?: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "member",
    name: "Member",
    access: "Annual Executive Membership",
    audience: "CIOs, CTOs, CISOs and CDOs of enterprises",
    cta: "Request an Invitation",
    href: "/membership/apply?plan=member",
    features: [
      "Up to 6 curated roundtables a year, matched to your city and industry",
      "4 member evenings and your monthly city chapter",
      "Priority registration for the CIO Pickleball League",
      "Quarterly masterclasses and priority invitations to residential programmes",
      "Confidential career desk and the board-readiness programme",
      "2 guest passes for family or a colleague",
      "Directory listing, member channel and the member desk",
    ],
  },
  {
    id: "founding",
    name: "Founding Circle",
    access: "By invitation only",
    note: "Curated cohort of 50 founding technology leaders",
    audience: "The first cohort of members who help shape CIO Lounge",
    cta: "Request an Invitation",
    href: "/membership/apply?plan=founding",
    highlight: true,
    features: [
      "Everything in Member, with roundtables by fit rather than a cap",
      "A seat on your city steering group, which sets the agenda",
      "Peer Forum included — a monthly confidential group of 8–10",
      "Hosted place at the National Grand Finale",
      "Board-readiness programme included",
      "Co-author the State of the Indian CIO commentary",
      "4 guest passes, a named relationship manager and founding recognition",
    ],
  },
  {
    id: "veteran",
    name: "Veteran Advisor",
    access: "Application & Council Review",
    audience: "Retired CIOs and enterprise technology leaders",
    cta: "Request an Invitation",
    href: "/membership/apply?plan=veteran",
    features: [
      "Join the Veteran CIO Advisory panel",
      "Independent advisory engagements, paid by the client — never by vendors",
      "Moderate roundtables and mentor members",
      "A regular column in CIO Studio",
      "Faculty and mentor roles on learning programmes",
      "4 member evenings and 2 guest passes a year",
    ],
  },
];

/** "Your year as a member" — headline entitlements of the Member plan. */
export const memberYear = [
  { value: "6", label: "curated roundtables" },
  { value: "4", label: "member evenings" },
  { value: "4", label: "masterclasses" },
  { value: "12", label: "city chapter meet-ups" },
  { value: "1", label: "league season, priority entry" },
  { value: "2", label: "guest passes" },
];

type Cell = string | boolean;
export interface MatrixGroup {
  title: string;
  rows: { label: string; hint?: string; values: Cell[] }[];
}

/** Columns: Member · Founding Circle · Veteran Advisor */
export const memberMatrixColumns = [
  { name: "Member", sub: "Annual membership" },
  { name: "Founding Circle", sub: "By invitation", highlight: true },
  { name: "Veteran Advisor", sub: "Application-based" },
];

export const memberMatrix: MatrixGroup[] = [
  {
    title: "Community and peers",
    rows: [
      { label: "Member directory and private member channel", values: [true, true, true] },
      { label: "Monthly city chapter meet-up", values: [true, true, true] },
      { label: "Peer Forum", hint: "Monthly confidential group of 8–10 with a trained facilitator", values: ["Add-on", "Included", false] },
      { label: "Seat on the city steering group", values: [false, true, false] },
      { label: "Nominate new members", values: [false, true, true] },
    ],
  },
  {
    title: "Events",
    rows: [
      { label: "Curated roundtables", values: ["Up to 6 a year", "By fit, no cap", "As moderator"] },
      { label: "Member evenings", values: ["4 a year", "4 a year + founders' dinner", "4 a year"] },
      { label: "CIO Pickleball League", values: ["Priority registration", "Priority + founding recognition", "Game-day invitation"] },
      { label: "National Grand Finale", values: ["Invitation (own travel)", "Hosted place", "Invitation (own travel)"] },
      { label: "Guest passes for family or a colleague", values: ["2", "4", "2"] },
    ],
  },
  {
    title: "Learning and career",
    rows: [
      { label: "Virtual masterclasses", values: ["Quarterly", "Quarterly", "Quarterly"] },
      { label: "Residential programmes with top institutions", values: ["Priority invitation", "Priority seat", "Faculty roles"] },
      { label: "Board-readiness programme", values: ["Eligible to enrol", "Included", "As mentor"] },
      { label: "Confidential career desk", hint: "Role moves, succession, compensation benchmarks", values: [true, true, false] },
      { label: "Session with a Veteran CIO advisor", values: ["On request", "1 included", false] },
    ],
  },
  {
    title: "Voice and influence",
    rows: [
      { label: "State of the Indian CIO report", values: ["Survey panel + early copy", "Co-author the commentary", "Survey panel + early copy"] },
      { label: "CIO Studio features", values: ["On request", "2 a year", "Regular column"] },
      { label: "Independent advisory engagements", values: [false, false, true] },
    ],
  },
  {
    title: "Lifestyle, family and service",
    rows: [
      { label: "Wellness sessions and family days", values: [true, true, true] },
      { label: "Hospitality partner privileges", values: [true, true, true] },
      { label: "Service", values: ["Member desk", "Named relationship manager", "Member desk"] },
      { label: "Welcome kit", values: ["Member kit", "Founders' kit", "Member kit"] },
    ],
  },
];

export const peerForum = {
  title: "Peer Forum",
  body: "A confidential group of 8–10 members from non-competing organisations who meet monthly with a trained facilitator. Bring a live decision — a vendor exit, a restructure, a board question — and leave with the view of peers who have faced it.",
  points: ["Monthly, 3 hours, in your city", "Chatham House rules", "Groups matched by company size, not industry, to avoid conflicts", "Included in Founding Circle; an add-on for Members"],
};

export const eligibility = [
  "You lead technology for an enterprise — CIO, CTO, CISO, CDO or head of IT.",
  "CIO Lounge is for the top layer only, not one level below.",
  "Vendors, OEMs and system integrators join as partners, not members.",
];

export const membershipFaq = [
  {
    q: "Why is membership by invitation and application?",
    a: "Every member brings leadership experience and commitment to the community. Reviewing each applicant personally keeps the room senior, the conversations serious — and ensures our members are never the product.",
  },
  {
    q: "Do partners pay commissions on deals with members?",
    a: "No. CIO Lounge operates on pure sponsorship and annual membership agreements. We never take a commission on deals between partners and members.",
  },
  {
    q: "Can vendors or system integrators become members?",
    a: "Partners take part through structured annual sponsorship tiers, which put them in the room on the same footing as members. Membership itself is reserved exclusively for enterprise technology leaders.",
  },
  {
    q: "Do I need to play pickleball?",
    a: "No. The league is one part of the platform. Many members join for roundtables, learning and advisory — though pickleball is easy to learn if you want to try.",
  },
  {
    q: "What happens to my data?",
    a: "Your details are never sold or shared with partners. Partners meet you only at sessions you choose to attend, and follow-ups happen only if you opt in.",
  },
  {
    q: "Can my family join events?",
    a: "Yes. Game days include an optional family zone, and spouses are invited to league finals and selected evenings.",
  },
];
