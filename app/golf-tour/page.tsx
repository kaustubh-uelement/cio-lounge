import type { Metadata } from "next";
import { events } from "@/data/events";
import { golfPartnerships } from "@/data/sports";
import { PropertyPage } from "@/components/PropertyPage";

export const metadata: Metadata = {
  title: "CIO Golf Tour",
  description: "A season of morning rounds for technology leaders across India's golf cities, with handicap and new-golfer flights and a Tour Championship.",
};

export default function GolfTourPage() {
  return (
    <PropertyPage
      sport="golf"
      eyebrow="CIO Lounge presents"
      title="CIO Golf Tour"
      accent="Season 2026–27"
      lead="A season of morning rounds for India's technology leaders — four city legs, a flight for every level of golfer, and a Tour Championship."
      about={{
        heading: "Four hours on the course, with the right people",
        points: [
          "A multi-city golf series exclusively for CIOs, CTOs and CISOs.",
          "Handicap golfers play an 18-hole Stableford; new golfers join a coaching clinic and a 9-hole scramble.",
          "Every leg ends with a prize-giving lunch, and points from every leg count towards the Tour Championship.",
          "The top layer only — the same standard as every CIO Lounge property.",
        ],
      }}
      why={{
        heading: "The sport of the long conversation",
        body: "Golf gives leaders four uninterrupted hours together — no slides, no agenda, and a shared scorecard at the end.",
        points: ["No handicap needed to join", "Played at any age", "Early mornings, back by lunch", "Built for real conversation"],
      }}
      format={{
        heading: "Four legs and a Tour Championship",
        lead: "Points from each leg decide who plays for the Tour title.",
        steps: [
          { title: "Register", body: "Members register for the season and choose their legs. New golfers are welcome." },
          { title: "Play the legs", body: "Mumbai opens the tour, followed by Delhi NCR, Bengaluru and Pune." },
          { title: "Earn points", body: "Stableford points in each flight count towards the season leaderboard." },
          { title: "Tour Championship", body: "The leading players meet at a destination course for two rounds and the Tour trophy." },
        ],
      }}
      experience={{
        heading: "Every tour day includes",
        items: ["Breakfast at registration", "Shotgun start", "Coaching clinic for new golfers", "Longest drive and nearest to the pin", "Halfway-house hospitality", "Prize-giving lunch", "Photo moments on the 18th"],
      }}
      partnerships={golfPartnerships}
      events={events.filter((e) => e.type === "golf")}
      registerHref="/membership/apply?interest=golf"
      cta={{ eyebrow: "Season 2026–27", title: "The Mumbai leg opens the tour.", body: "Register your interest and we'll share dates with members first." }}
    />
  );
}
