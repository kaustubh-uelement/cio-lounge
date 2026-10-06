// Event catalogue. Every page, filter, calendar file and the /api/events feed read from this list.
// `sample: true` marks format examples that are not yet scheduled — they show a "Sample listing" badge.

export type EventType = "league" | "finale" | "training" | "golf" | "cricket" | "roundtable" | "learning" | "networking";
export type Sport = "pickleball" | "golf" | "cricket";
export type EventStatus = "registration-open" | "upcoming" | "announced" | "tba";

export interface CxoEvent {
  slug: string;
  title: string;
  type: EventType;
  city: string;
  venue: string;
  /** ISO date (yyyy-mm-dd) when fixed; null when not yet scheduled */
  startDate: string | null;
  endDate?: string | null;
  dateLabel: string;
  status: EventStatus;
  audience: string;
  capacity?: string;
  summary: string;
  description: string[];
  highlights: string[];
  agenda?: { time: string; item: string }[];
  agendaNote?: string;
  partnerNote?: string;
  sample?: boolean;
  featured?: boolean;
}

export const eventTypeLabels: Record<EventType, string> = {
  league: "Pickleball League",
  finale: "Pickleball Grand Finale",
  training: "Pickleball coaching",
  golf: "CIO Golf Tour",
  cricket: "CIO Premier League",
  roundtable: "Roundtable",
  learning: "Learning programme",
  networking: "Networking",
};

/** Which sports property an event belongs to, if any. */
export function sportOf(type: EventType): Sport | null {
  if (type === "league" || type === "finale" || type === "training") return "pickleball";
  if (type === "golf") return "golf";
  if (type === "cricket") return "cricket";
  return null;
}

export const statusLabels: Record<EventStatus, string> = {
  "registration-open": "Registration open",
  upcoming: "Upcoming",
  announced: "Announced",
  tba: "Dates to be announced",
};

const leagueHighlights = [
  "8 teams · 8 players per team · 64 players",
  "Group stage, Super Four and IPL-style playoffs — concluded in one day",
  "Tournament director and referees appointed by the All India Pickleball Association",
  "A personalised, CIO Lounge–branded kit for every player",
  "Wellness zone, food and beverage court, live entertainment and awards",
];

const leagueGameDay = [
  { time: "Morning", item: "Arrivals, wellness zone and opening ceremony" },
  { time: "Late morning", item: "League stage — two groups of four" },
  { time: "Lunch", item: "Food and beverage court · networking lounge" },
  { time: "Afternoon", item: "Super Four round robin" },
  { time: "Late afternoon", item: "Qualifier, Eliminator and Final" },
  { time: "Evening", item: "Awards ceremony and closing celebration" },
];

function cityLeague(slug: string, city: string, note?: string): CxoEvent {
  return {
    slug,
    title: `CIO Pickleball League — ${city}`,
    type: "league",
    city,
    venue: `${city} · venue to be announced`,
    startDate: null,
    dateLabel: "2026–27 · dates to be announced",
    status: "tba",
    audience: "CIOs, CTOs and CISOs",
    capacity: "64–80 technology leaders",
    summary: `The India Tour arrives in ${city}. Every city crowns its own champion before the National Grand Finale.${note ? ` ${note}` : ""}`,
    description: [
      `The ${city} league follows the Mumbai format: eight teams of eight, a group stage, the Super Four and IPL-style playoffs, all concluded in a single day.`,
      "Registration opens with pre-season coaching under certified coaches, practice matches and team selection.",
    ],
    highlights: leagueHighlights,
    agenda: leagueGameDay,
    agendaNote: "Indicative run of show.",
    partnerNote: "City Platinum, Team Partner and Associate slots are available for this city.",
  };
}

const golfHighlights = [
  "18-hole Stableford for handicap golfers",
  "A 9-hole scramble and coaching clinic for new golfers",
  "Longest-drive and nearest-to-the-pin contests",
  "Prize-giving lunch with peers and partners",
];

const golfDay = [
  { time: "06:30", item: "Registration and breakfast" },
  { time: "07:30", item: "Shotgun start — 18-hole Stableford" },
  { time: "08:00", item: "Coaching clinic and 9-hole scramble for new golfers" },
  { time: "12:30", item: "Lunch, prize-giving and networking" },
];

function golfLeg(slug: string, city: string, status: EventStatus, dateLabel: string, opener = false): CxoEvent {
  return {
    slug,
    title: `CIO Golf Tour — ${city}`,
    type: "golf",
    city,
    venue: `${city} · course to be announced`,
    startDate: null,
    dateLabel,
    status,
    audience: "CIOs, CTOs and CISOs — golfers of every level",
    capacity: "Handicap and new-golfer flights",
    summary: opener
      ? "The opening leg of the CIO Golf Tour: a morning on the course, a clinic for new golfers, and lunch with peers."
      : `The CIO Golf Tour comes to ${city}. Points from every leg count towards the Tour Championship.`,
    description: [
      "The CIO Golf Tour is a season of morning rounds for technology leaders. Experienced golfers play an 18-hole Stableford in handicap flights; new golfers join a coaching clinic and a 9-hole scramble, so nobody needs a handicap to take part.",
      "Every leg ends with lunch and prize-giving — four hours on the course with peers builds the kind of relationship a keynote never will.",
    ],
    highlights: golfHighlights,
    agenda: golfDay,
    agendaNote: "Indicative run of show.",
    partnerNote: "Tour partner, hole and hospitality partnerships are available for this leg.",
  };
}

const golfEvents: CxoEvent[] = [
  golfLeg("cgt-mumbai", "Mumbai", "announced", "Winter 2026–27 · date to be announced", true),
  golfLeg("cgt-delhi-ncr", "Delhi NCR", "tba", "2027 · date to be announced"),
  golfLeg("cgt-bengaluru", "Bengaluru", "tba", "2027 · date to be announced"),
  golfLeg("cgt-pune", "Pune", "tba", "2027 · date to be announced"),
  {
    slug: "cgt-tour-championship",
    title: "CIO Golf Tour Championship",
    type: "golf",
    city: "Destination to be announced",
    venue: "Destination course to be announced",
    startDate: null,
    dateLabel: "After the tour legs · date to be announced",
    status: "tba",
    audience: "Leading players from every leg, members and partners",
    summary: "The leading players from each leg meet at a destination course to play for the Tour title.",
    description: [
      "Points from every leg decide who qualifies. The Championship is a destination weekend: two rounds, a gala dinner and the Tour trophy.",
    ],
    highlights: ["Qualification on points from every leg", "Two rounds over a destination weekend", "Gala dinner and Tour trophy"],
    partnerNote: "Championship partnership is offered separately from the tour legs.",
  },
];

const cricketEvents: CxoEvent[] = [
  {
    slug: "cipl-draft-night",
    title: "CIO Premier League — Draft Night",
    type: "cricket",
    city: "Mumbai",
    venue: "Mumbai · venue to be announced",
    startDate: null,
    dateLabel: "Early 2027 · date to be announced",
    status: "announced",
    audience: "Registered players, team owners and members",
    summary: "Team owners draft their squads from registered technology leaders in an IPL-style draft — an evening of networking with a sporting edge.",
    description: [
      "Partner companies own and name the eight teams. On Draft Night, captains and team owners pick their squads from the CIOs, CTOs and CISOs who have registered to play.",
      "Team kits are revealed, captains are announced, and the season fixtures go live.",
    ],
    highlights: ["Eight teams, owned and named by partner companies", "Squads drafted from registered technology leaders", "Captains, kits and fixtures revealed"],
    partnerNote: "Team ownership is open to partner companies.",
  },
  {
    slug: "cipl-season-1",
    title: "CIO Premier League — Season 1",
    type: "cricket",
    city: "Mumbai",
    venue: "Mumbai · ground to be announced",
    startDate: null,
    dateLabel: "Early 2027 · two weekends, dates to be announced",
    status: "announced",
    audience: "CIOs, CTOs and CISOs",
    capacity: "8 teams · 12-player squads",
    summary: "T10 cricket for technology leaders: eight franchise teams, two weekends of matches and a floodlit final.",
    description: [
      "The CIO Premier League brings the energy of franchise cricket to the CIO community. Eight teams, each owned by a partner company, play ten-over matches across two weekends.",
      "Matchdays have family stands, a food court and live commentary, and the season closes with a floodlit final and awards night.",
    ],
    highlights: [
      "8 franchise teams owned by partner companies",
      "T10 matches — ten overs a side",
      "League stage, semi-finals and a floodlit final",
      "A personalised team kit for every player",
      "Family stands, food court and awards night",
    ],
    agenda: [
      { time: "Weekend 1", item: "League stage — every team plays three matches" },
      { time: "Weekend 2", item: "Final league matches and semi-finals" },
      { time: "Final night", item: "Floodlit final, awards and closing celebration" },
    ],
    agendaNote: "Indicative format.",
    partnerNote: "Title, team-owner and associate partnerships are available.",
  },
];

export const events: CxoEvent[] = [
  {
    slug: "cpl-mumbai-2026",
    title: "CIO Pickleball League — Mumbai",
    type: "league",
    city: "Mumbai",
    venue: "Mumbai · venue to be announced",
    startDate: "2026-11-07",
    dateLabel: "First week of November 2026 · Saturday or Sunday",
    status: "registration-open",
    audience: "CIOs, CTOs and CISOs — the top layer only",
    capacity: "64 players · 8 teams",
    summary:
      "The inaugural edition of India's premier pickleball league for IT leaders. One spectacular day of competition and celebration in India's financial capital.",
    description: [
      "Mumbai hosts the inaugural edition of the CIO Lounge Pickleball League. As India's financial capital and home to hundreds of technology decision-makers, it is the perfect launchpad — and sets the benchmark for every city league that follows.",
      "Players train from September with certified coaches at four venues across the city, play practice matches and are drafted into eight teams. Game day brings them together with their families, partners and the pickleball community.",
    ],
    highlights: leagueHighlights,
    agenda: leagueGameDay,
    agendaNote: "Indicative run of show — final schedule shared with registered players.",
    partnerNote: "Title, Platinum, Team Partner and Associate sponsorships are open for Mumbai.",
    featured: true,
  },
  {
    slug: "cpl-mumbai-coaching",
    title: "Pre-season coaching camps — Mumbai",
    type: "training",
    city: "Mumbai",
    venue: "Navi Mumbai · Lower Parel · Malad · Thane",
    startDate: "2026-10-02",
    endDate: "2026-10-31",
    dateLabel: "October 2026 · every Friday to Sunday",
    status: "registration-open",
    audience: "Registered Mumbai League players",
    capacity: "Open to all 64 registered players",
    summary:
      "Weekly professional coaching under certified pickleball coaches, practice matches and team selection — so every player arrives match-ready.",
    description: [
      "Pickleball is easy to learn and low impact, but a league deserves preparation. Camps run every Friday to Sunday at four venues so players can train close to home or office.",
      "Camps end with practice matches and team selection ahead of the Mumbai League.",
    ],
    highlights: [
      "Certified pickleball coaches",
      "Four venues across Mumbai",
      "Practice matches and team selection",
      "No prior experience needed",
    ],
  },
  {
    slug: "cpl-media-launch",
    title: "CIO Pickleball League — Media Launch",
    type: "networking",
    city: "Mumbai",
    venue: "Mumbai · venue to be announced",
    startDate: null,
    dateLabel: "October 2026 · date to be announced",
    status: "announced",
    audience: "Members, partners and media",
    summary:
      "The official launch of the India Tour: the brand ambassador, the partners, the kit and the city calendar, unveiled together.",
    description: [
      "The media launch introduces the league to the technology community and the press, with the tournament partner, brand ambassador and founding sponsors on stage.",
    ],
    highlights: ["League and city calendar unveiled", "Meet the brand ambassador", "Founding sponsors announced"],
  },
  cityLeague("cpl-delhi", "Delhi"),
  cityLeague("cpl-bangalore", "Bangalore"),
  cityLeague("cpl-hyderabad", "Hyderabad"),
  cityLeague("cpl-chennai", "Chennai"),
  cityLeague("cpl-ahmedabad", "Ahmedabad"),
  cityLeague("cpl-pune", "Pune", "Pune is an optional stop on the tour."),
  {
    slug: "cpl-grand-finale",
    title: "Pickleball League — National Grand Finale",
    type: "finale",
    city: "Goa / Phuket / Sri Lanka",
    venue: "Exotic domestic or international venue — to be announced",
    startDate: null,
    dateLabel: "After the city leagues · dates to be announced",
    status: "tba",
    audience: "City champions, members, partners and families",
    summary:
      "City champions meet for the national title at an exotic destination — subject to sponsorship and logistics.",
    description: [
      "Every city league crowns a champion. The Grand Finale brings them together for the national title, with a destination weekend for players, partners and families.",
    ],
    highlights: ["City champions compete for the national title", "Destination weekend", "Sponsored separately from the city tour"],
    partnerNote: "Grand Finale sponsorship is offered separately from the city tour.",
  },
  ...golfEvents,
  ...cricketEvents,
  {
    slug: "bfsi-technology-roundtable",
    title: "BFSI Technology Leaders Roundtable",
    type: "roundtable",
    city: "Mumbai",
    venue: "ITC / Taj property, Mumbai",
    startDate: null,
    dateLabel: "Q4 2026 · date to be announced",
    status: "announced",
    audience: "15 CIOs and CISOs from banking, insurance and capital markets",
    capacity: "15 leaders",
    summary:
      "A curated roundtable in the CIO Lounge format: pre-read, a short product capsule, then an open discussion moderated by a CIO.",
    description: [
      "The partner's product literature is shared with 15 targeted BFSI leaders in advance. They arrive prepared, with their pros and cons.",
      "The partner's product head presents a 15–25 minute capsule. A CIO moderates the open discussion that follows — and leaders who share the pain point step forward for a proof of concept.",
    ],
    highlights: [
      "Pre-read shared with every participant",
      "CIO-moderated — not vendor-led",
      "15–25 minute product capsule, never longer",
      "Clear path to proof of concept",
    ],
    agenda: [
      { time: "08:30", item: "Breakfast and introductions" },
      { time: "09:00", item: "Product capsule by the partner's product head" },
      { time: "09:25", item: "Open discussion, moderated by a member CIO" },
      { time: "10:30", item: "Next steps and close" },
    ],
    agendaNote: "Sample format.",
    sample: true,
  },
  {
    slug: "ciso-breakfast-roundtable",
    title: "CISO Breakfast Roundtable",
    type: "roundtable",
    city: "Delhi",
    venue: "Delhi · venue to be announced",
    startDate: null,
    dateLabel: "2027 · date to be announced",
    status: "tba",
    audience: "20 CISOs and security leaders",
    capacity: "20 leaders",
    summary:
      "An intimate breakfast conversation among security leaders — the format included with every city in the Title sponsorship.",
    description: [
      "Title sponsors host a 20-CXO breakfast roundtable in every tour city. The audience is curated by CIO Lounge and the conversation is led by members.",
    ],
    highlights: ["20 curated security leaders", "Member-led conversation", "Hosted at partner hospitality venues"],
    sample: true,
  },
  {
    slug: "ai-leaders-residential-programme",
    title: "AI for Technology Leaders — Residential Programme",
    type: "learning",
    city: "Mumbai",
    venue: "IIT Bombay (proposed)",
    startDate: null,
    dateLabel: "2027 · dates to be announced",
    status: "tba",
    audience: "40 CIOs, CISOs and CTOs",
    capacity: "40 leaders",
    summary:
      "A residential workshop designed with faculty for senior technology leaders, supported by a programme partner.",
    description: [
      "CIO Lounge works with top institutions to build short residential programmes for senior technology leaders, supported by a programme partner.",
      "The programme partner receives stage time with the cohort and a 30-minute closing session.",
    ],
    highlights: ["Designed with faculty", "Cohort of 40 senior leaders", "Residential format", "Partner stage time and closing session"],
    sample: true,
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function sortEvents(list: CxoEvent[]) {
  const rank: Record<EventStatus, number> = { "registration-open": 0, upcoming: 1, announced: 2, tba: 3 };
  return [...list].sort((a, b) => {
    if (a.startDate && b.startDate) return a.startDate.localeCompare(b.startDate);
    if (a.startDate) return -1;
    if (b.startDate) return 1;
    return rank[a.status] - rank[b.status];
  });
}

export const featuredEvent = events.find((e) => e.featured)!;
