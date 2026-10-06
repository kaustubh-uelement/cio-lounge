import { Dumbbell, Flag, GraduationCap, Medal, MessagesSquare, PartyPopper, Trophy, Wine } from "lucide-react";
import type { EventType } from "@/data/events";

export function EventTypeIcon({ type, className }: { type: EventType; className?: string }) {
  const Icon = { league: Trophy, finale: PartyPopper, training: Dumbbell, golf: Flag, cricket: Medal, roundtable: MessagesSquare, learning: GraduationCap, networking: Wine }[type];
  return <Icon className={className} aria-hidden />;
}
