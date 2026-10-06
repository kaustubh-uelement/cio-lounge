// The three CIO Lounge sports properties. Used on the home page, the /sports hub and each property page.
import type { Sport } from "./events";

export interface SportProperty {
  key: Sport;
  name: string;
  short: string;
  tagline: string;
  summary: string;
  status: string;
  href: string;
  facts: { value: string; label: string }[];
}

export const sportsProperties: SportProperty[] = [
  {
    key: "pickleball",
    name: "CIO Pickleball League",
    short: "Pickleball League",
    tagline: "India Tour",
    summary:
      "India's first multi-city pickleball championship for technology leaders — eight teams of eight in every city, and a National Grand Finale.",
    status: "Mumbai League · first week of November 2026",
    href: "/pickleball-league",
    facts: [
      { value: "7", label: "cities" },
      { value: "8 × 8", label: "teams × players" },
      { value: "1 day", label: "per city league" },
    ],
  },
  {
    key: "golf",
    name: "CIO Golf Tour",
    short: "Golf Tour",
    tagline: "Season 2026–27",
    summary:
      "Morning rounds across India's golf cities, with handicap flights for experienced golfers and a clinic for new ones — then the Tour Championship.",
    status: "Mumbai leg · winter 2026–27",
    href: "/golf-tour",
    facts: [
      { value: "4", label: "tour legs" },
      { value: "2", label: "flights: handicap and new golfers" },
      { value: "1", label: "Tour Championship" },
    ],
  },
  {
    key: "cricket",
    name: "CIO Premier League",
    short: "Premier League",
    tagline: "Season 1",
    summary:
      "T10 franchise cricket for technology leaders — eight teams owned by partner companies, a Draft Night, and a floodlit final.",
    status: "Season 1 · early 2027",
    href: "/premier-league",
    facts: [
      { value: "8", label: "franchise teams" },
      { value: "T10", label: "ten overs a side" },
      { value: "2", label: "weekends of matches" },
    ],
  },
];

export const golfPartnerships = [
  { title: "Tour partner", body: "Naming rights across every leg and the Tour Championship, with branding on flags, carts and the leaderboard." },
  { title: "Leg partner", body: "Presenting rights for one city leg, a welcome address at the prize-giving lunch, and playing spots for your leaders." },
  { title: "Hole partner", body: "Branding on a signature hole, with a hosted tee-box experience for every group that plays through." },
  { title: "Hospitality partner", body: "The breakfast, halfway house and prize-giving lunch, hosted in your name." },
];

export const cricketPartnerships = [
  { title: "Title partner", body: "Naming rights for the season, premium kit branding, and the trophy presentation at the floodlit final." },
  { title: "Team owner", body: "Own and name one of eight franchise teams, draft your squad on Draft Night, and host your team's supporters." },
  { title: "Associate partner", body: "Matchday branding, a hospitality box and passes for your leadership team." },
];
