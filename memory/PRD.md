# Chef Balpreet Singh Chadha — Portfolio Website (PRD)

## Original Problem Statement
> can you build a website think like i am the professional chef and worked around the globe i want to include my instagram and facebook links in my website to reach out to me for consultation. and the projects done, current ones, awards recognitions upcoming projects along with the best dishes i made also in the particular sections including best suited content with images

## User Choices
- Chef name: **Balpreet Singh Chadha**
- Style: **Elegant & editorial** (dark, luxurious, fine-dining feel)
- Contact: **Working consultation form** (backend-backed)
- Content/images: Rich placeholder content + curated stock photography (chef will replace later)
- Instagram / Facebook / Email URLs: to be provided by chef later (currently `#` and `hello@chefbalpreet.com` placeholders)

## User Personas
1. **Restaurant Group / Hotel** looking to hire a consulting chef.
2. **Media & Press** seeking an interview or feature.
3. **Private Client** booking a private dining experience.
4. **Fellow Chef / Fan** discovering the chef's story and following on social.

## Architecture
- **Frontend**: React 19 + React Router + Tailwind + Framer Motion + Shadcn UI + Sonner toasts + lucide-react icons. Fonts: Cormorant Garamond (display) + Outfit (body).
- **Backend**: FastAPI + Motor (async Mongo) with `/api` prefix.
- **DB**: MongoDB `consultation_inquiries` collection.
- Routes (all `/api` prefixed):
  - `GET /api/` — health / API name
  - `POST /api/consultation` — create inquiry (201)
  - `GET /api/consultation?limit=` — list inquiries (newest first)

## Core Requirements (Static)
- Single-page portfolio at `/`
- Sections: Hero, About, Signature Dishes, Projects (Past/Current/Upcoming), Awards & Recognition, Contact + Consultation Form, Footer
- Instagram + Facebook + Email links visible in Contact & Footer
- Working consultation form persisting to MongoDB
- Editorial dark theme (bg `#0A0908`, gold `#C5A059`) — no purple gradients, no AI-slop
- All interactive elements have kebab-case `data-testid`

## What's Been Implemented (2026-07-06)
- ✅ Fully responsive single-page portfolio with Nav, Hero, About (+ journey timeline + accolades marquee), Dishes (4 signature plates), Projects (tabbed Past/Current/Upcoming), Awards (accolade list + press quotes), Contact (form + social links), Footer
- ✅ Working consultation form (POST /api/consultation) — persistence verified end-to-end
- ✅ Framer Motion reveal animations, elegant hover states, editorial input styles
- ✅ 100% pass on testing_agent_v3 iteration 1 (backend 9/9 pytest, frontend UI flows all green)
- ✅ Pytest regression suite at `/app/backend/tests/test_consultation_api.py`

## Prioritized Backlog

### P0 (blocking chef going live)
- [ ] Replace placeholder Instagram / Facebook / Email URLs in `/app/frontend/src/data/portfolio.js` → `chef.socials` with the chef's real handles
- [ ] Optionally: swap stock images for the chef's own dish/kitchen photography

### P1 (high-value enhancements)
- [ ] Email delivery on new consultation inquiry (integrate Resend so the chef gets notified — needs chef's email)
- [ ] Simple admin route (`/admin`) to view + export consultation inquiries
- [ ] Update chef bio/journey text with real career milestones and cities

### P2 (nice-to-have)
- [ ] Video hero (subtle b-roll loop)
- [ ] Press logos strip (Michelin, F&W, CN Traveller)
- [ ] Multilingual toggle (EN / HI / PA)
- [ ] Add DELETE / GET-by-id endpoints for admin cleanup
- [ ] Store `created_at` as native BSON date (currently ISO string)
- [ ] Add `noValidate` to form OR align HTML5 attrs with JS toast validation path (UX polish)

## Next Tasks
1. Collect real Instagram / Facebook / Email from chef, drop into `portfolio.js`.
2. Wire Resend for inquiry email notifications once chef's email is confirmed.
3. Chef to send real dish + portrait photography — swap URLs in `dishes[]` + section image constants.
