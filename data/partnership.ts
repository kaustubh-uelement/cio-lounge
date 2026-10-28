// Annual corporate partnership programmes: year-round access, separate from per-city league sponsorship.
// Entitlements are PROPOSED for the 2026–27 programme year; confirm with CXO Lounge before launch.
import type { MatrixGroup } from "./membership";

export interface PartnerProgramme {
  id: string;
  name: string;
  forWhom: string;
  highlight?: boolean;
  headline: { value: string; label: string }[];
  includes: string[];
}

export const partnerProgrammes: PartnerProgramme[] = [
  {
    id: "ecosystem",
    name: "Ecosystem Partner",
    forWhom: "ISVs, startups and specialist firms building their first CIO relationships",
    headline: [
      { value: "2", label: "curated roundtables" },
      { value: "1", label: "CXO breakfast" },
      { value: "4", label: "event passes" },
    ],
    includes: [
      "2 curated roundtables a year, 15 targeted leaders each",
      "1 CXO breakfast for 10 leaders",
      "Associate Partner rights at the league in one city",
      "1 sponsored feature in CIO Studio",
      "Early copy of the State of the Indian CIO report",
      "Quarterly partner briefing on CIO priorities",
      "4 passes to member events",
    ],
  },
  {
    id: "strategic",
    name: "Strategic Partner",
    forWhom: "OEMs and system integrators who want a year-round programme",
    highlight: true,
    headline: [
      { value: "4", label: "curated roundtables" },
      { value: "2", label: "advisory board sessions" },
      { value: "6", label: "pre-booked 1:1s" },
    ],
    includes: [
      "4 curated roundtables and 2 CXO breakfasts a year",
      "Your customer advisory board, recruited and run by us: 2 sessions a year with 8–10 members",
      "2 questions in the State of the Indian CIO survey, plus a findings briefing",
      "Team Partner rights at the league in two cities",
      "6 pre-scheduled, opt-in 1:1 meetings at the National Grand Finale",
      "A speaking slot at one member evening and 2 CIO Studio features",
      "Seat on the annual partner council · named partner manager · 10 passes",
    ],
  },
  {
    id: "principal",
    name: "Principal Partner",
    forWhom: "One partner per category: cloud, cybersecurity, data and AI, networks and more",
    headline: [
      { value: "8", label: "curated roundtables" },
      { value: "4", label: "advisory board sessions" },
      { value: "1", label: "category, exclusively yours" },
    ],
    includes: [
      "Category exclusivity across CIO Lounge programmes",
      "8 curated roundtables and 4 CXO breakfasts a year",
      "A quarterly customer advisory board run for you",
      "A co-branded chapter of the State of the Indian CIO report",
      "Platinum rights at the league in two cities, or credit towards the Title sponsorship",
      "Programme partner for one residential learning programme",
      "12 pre-scheduled, opt-in 1:1 meetings at the National Grand Finale",
      "Executive sponsor seat on the partner council · quarterly business reviews · 20 passes",
    ],
  },
];

export const partnerMatrixColumns = [
  { name: "Ecosystem", sub: "Entry programme" },
  { name: "Strategic", sub: "Year-round programme", highlight: true },
  { name: "Principal", sub: "One per category" },
];

export const partnerMatrix: MatrixGroup[] = [
  {
    title: "Access to decision-makers",
    rows: [
      { label: "Curated roundtables", hint: "About 15 targeted leaders, pre-read, CIO-moderated", values: ["2 a year", "4 a year", "8 a year"] },
      { label: "CXO breakfasts", hint: "10–20 leaders", values: ["1 a year", "2 a year", "4 a year"] },
      { label: "Customer advisory board, run for you", values: [false, "2 sessions", "Quarterly"] },
      { label: "Pre-scheduled 1:1s at the Grand Finale", hint: "Members opt in to each meeting", values: [false, "6", "12"] },
      { label: "Speaking slot at a member evening", values: [false, "1", "2"] },
    ],
  },
  {
    title: "Insight",
    rows: [
      { label: "State of the Indian CIO report", values: ["Early copy", "2 survey questions + briefing", "Co-branded chapter"] },
      { label: "Quarterly partner briefing on CIO priorities", values: [true, true, true] },
      { label: "Engagement report after every session", hint: "Attendance, feedback, opt-in follow-ups, POCs", values: [true, true, true] },
    ],
  },
  {
    title: "Brand and content",
    rows: [
      { label: "CIO Pickleball League rights", values: ["Associate, 1 city", "Team Partner, 2 cities", "Platinum, 2 cities"] },
      { label: "CIO Studio features", values: ["1", "2", "4 + a podcast episode"] },
      { label: "Learning programme partnership", values: [false, "Session slot", "Programme partner"] },
      { label: "Logo on the partner wall and event signage", values: [true, true, true] },
      { label: "Category exclusivity", values: [false, false, true] },
    ],
  },
  {
    title: "Service",
    rows: [
      { label: "Passes to member events", values: ["4", "10", "20"] },
      { label: "Partner council", values: [false, "Seat", "Executive sponsor seat"] },
      { label: "Partner management", values: ["Shared team", "Named manager", "Named manager + quarterly reviews"] },
      { label: "Bespoke partner events, curated by CIO Lounge", values: [true, true, true] },
    ],
  },
];

export const partnerNever = [
  "Member contact lists or directory exports",
  "Commission on deals: we never take a cut, and never ask for one",
  "Meetings with members who haven't opted in",
  "Pitches longer than 25 minutes",
];

export const partnerJourney = [
  { title: "Brief", body: "In your first month we agree your goals, target accounts, industries and cities." },
  { title: "Engage", body: "Roundtables, breakfasts and advisory boards run through the year, each with a pre-read." },
  { title: "Measure", body: "After every session you get attendance, feedback and opt-in follow-ups; each quarter, a review." },
  { title: "Renew", body: "An annual review of meetings, proofs of concept and pipeline shapes next year's plan." },
];

export const partnerFaq = [
  {
    q: "Can we get the member list?",
    a: "No. Members are never the product. You meet them in sessions they choose to attend, and follow-ups happen only when a member opts in.",
  },
  {
    q: "How is this different from sponsoring the league?",
    a: "League sponsorship is per city and per season. An annual partnership is a year-round programme of roundtables, advisory boards and insight, and league rights are already included.",
  },
  {
    q: "How do you measure results?",
    a: "Every session ends with an engagement report: who attended, their feedback, and which members opted in to follow up. Quarterly reviews track proofs of concept and pipeline.",
  },
  {
    q: "What does category exclusivity cover?",
    a: "A Principal Partner is the only partner in its category across CIO Lounge programmes for the year (for example, the only cloud partner).",
  },
  {
    q: "How do we get started?",
    a: "Tell us your goals, target industries and cities. We'll come back with a tailored proposal and an audience profile.",
  },
];
