import type { Sport } from "@/data/events";
import { PaddleArt } from "./PaddleArt";
import { CricketArt, GolfArt } from "./SportArt";

export function SportVisual({ sport, className }: { sport: Sport; className?: string }) {
  if (sport === "golf") return <GolfArt className={className} />;
  if (sport === "cricket") return <CricketArt className={className} />;
  return <PaddleArt className={className} />;
}
