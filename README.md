# CIO Lounge: website (CXO Lounge Pvt Ltd)

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · Poppins (self-hosted via Fontsource) · Zod · Lucide icons.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start   # production server, with API routes
npm run build:preview        # static export to ./out (no API routes), for a shareable preview
```

Deploys as-is to Vercel (recommended) or any Node host. Set `NEXT_PUBLIC_SITE_URL` to the live domain.

## What's in it

| Route | Purpose |
|---|---|
| `/` | Home: corporate introduction: what CIO Lounge is, who it's for, how it works (members and partners), programmes, sports properties, principles, leadership, and upcoming events at the bottom |
| `/events`, `/events/[slug]` | Every event with search and filters (type, city, registration open); detail pages with run of show, add-to-calendar (.ics), countdown, schema.org Event data |
| `/sports` | Hub for the three sports properties |
| `/pickleball-league`, `/golf-tour`, `/premier-league` | Property pages: format, season schedule, experience, partnership opportunities |
| `/members` | Member directory with search and filters (role, industry, city, league players), plus the advisory council |
| `/membership`, `/membership/apply` | Plans, "your year as a member", a full plan-by-plan comparison table, the Peer Forum add-on, benefits, eligibility, FAQ; three-step application form (`?plan=` and `?interest=league` pre-fill it) |
| `/partners` | For OEMs, SIs and institutions: three annual partnership programmes with a full comparison table, how the year runs, member protections, the roundtable model, per-city league sponsorship, bespoke events at cost + 20%, FAQ and enquiry form |
| `/advisory`, `/learning`, `/studio`, `/foundation`, `/about`, `/contact` | Veteran CIO Advisory, learning programmes, CIO Studio articles, CIO Foundation, founder story, contact form |
| `/api/membership`, `/api/partners`, `/api/contact` | POST, Zod-validated form handlers |
| `/api/events` | GET JSON feed of events (`?type=&city=&status=`) |
| `/sitemap.xml`, `/robots.txt` | SEO |

## Where the content lives

All content is typed data in `/data` (sports properties in `data/sports.ts`): edit these files, no code changes needed:

- `data/site.ts`: contact details, navigation, headline stats, principles, platforms
- `data/events.ts`: the event catalogue (drives the events pages, home page, league page and `/api/events`)
- `data/members.ts`: member directory and advisory council
- `data/membership.ts`: plans, benefits, eligibility, FAQ
- `data/sponsorship.ts`: sponsor tiers, roundtable steps
- `data/studio.ts`: CIO Studio articles

When the catalogue grows, swap these for a CMS (Sanity, Contentful) or a database; pages only import the exported arrays and helpers.

## Form submissions

`lib/submissions.ts` logs each submission and, if `SUBMISSIONS_WEBHOOK_URL` is set, POSTs it there (Zapier, Make, HubSpot, a Google Sheet via Apps Script, etc.). Replace with your CRM or email provider as needed.

## Before launch: placeholders and items to confirm

- **Members and advisors are SAMPLE data** (fictional people and companies). Replace with real members, with their consent.
- Contact email, phone, address, domain and LinkedIn URL in `data/site.ts`.
- **No prices are shown anywhere on the site** (membership, sponsorship, partner programmes, events). Share pricing in proposals.
- Founding Circle and Veteran Advisor terms.
- Member entitlements (`data/membership.ts` → `memberMatrix`, `memberYear`) and annual partner programmes (`data/partnership.ts`) are PROPOSED quantities for 2026–27: confirm each number with CXO Lounge. 
- Mumbai League date (set to 7 Nov 2026 for the countdown; the site says "first week of November, Saturday or Sunday"), and venue.
- City league and Grand Finale dates.
- CIO Golf Tour and CIO Premier League (`data/events.ts`, `data/sports.ts`): formats, cities and seasons are proposals. The Premier League is set up as T10 cricket; change the copy if it's a different sport.
- Written consent to name the All India Pickleball Association, Vrushali Thakare, ITC, Taj and IIT Bombay.
- Events flagged `sample: true` (roundtables, learning programme) are format examples, shown with a "Sample listing" badge.
- CIO Studio articles are drafts written from the founder's stated views: approve or replace.
- Privacy policy and terms pages (footer links currently point to Contact).

## Suggested next phase

Member login and private profiles (NextAuth or Clerk), online payment for membership and league registration (Razorpay), an admin view of applications, sponsor logo wall, photo galleries per event, and a WhatsApp opt-in for event updates.
