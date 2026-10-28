import type { Metadata } from "next";
import { events } from "@/data/events";
import { cricketPartnerships } from "@/data/sports";
import { PropertyPage } from "@/components/PropertyPage";

export const metadata: Metadata = {
  title: "CIO Premier League",
  description: "T10 franchise cricket for technology leaders: eight teams owned by partner companies, a Draft Night and a floodlit final.",
};

export default function PremierLeaguePage() {
  return (
    <PropertyPage
      sport="cricket"
      eyebrow="CIO Lounge presents"
      title="CIO Premier League"
      accent="Season 1"
      lead="T10 franchise cricket for India's technology leaders: eight teams, a Draft Night, two weekends of matches and a floodlit final."
      about={{
        heading: "Franchise cricket, built for the CIO community",
        points: [
          "Eight franchise teams, each owned and named by a partner company.",
          "Squads drafted from registered CIOs, CTOs and CISOs on Draft Night.",
          "Ten-over matches across two weekends, then semi-finals and a floodlit final.",
          "Family stands, a food court and an awards night that closes the season.",
        ],
      }}
      why={{
        heading: "India's game, at team scale",
        body: "Cricket is the one sport almost every technology leader has played. Twelve-player squads build real team bonds over a season.",
        points: ["Ten overs a side: short matches", "Every squad mixes companies and industries", "Partners play alongside members", "Families in the stands"],
      }}
      format={{
        heading: "From Draft Night to the final",
        lead: "One season, eight teams, played in Mumbai.",
        steps: [
          { title: "Register", body: "Members register to play and share their batting and bowling strengths." },
          { title: "Draft Night", body: "Team owners and captains draft their squads in an IPL-style evening." },
          { title: "League weekends", body: "Every team plays three league matches across the first weekend and a half." },
          { title: "Floodlit final", body: "Semi-finals, then the final under lights, with awards and a closing celebration." },
        ],
      }}
      experience={{
        heading: "Every matchday includes",
        items: ["Personalised team kits", "Live commentary", "Family stands", "Food court", "Player of the match", "Awards night", "Photo and video highlights"],
      }}
      partnerships={cricketPartnerships}
      events={events.filter((e) => e.type === "cricket")}
      registerHref="/membership/apply?interest=cricket"
      cta={{ eyebrow: "Season 1 · early 2027", title: "Eight teams. One trophy.", body: "Register to play, or ask about owning a team." }}
    />
  );
}
