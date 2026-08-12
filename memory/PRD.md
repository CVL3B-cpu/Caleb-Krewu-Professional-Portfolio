# PRD — Caleb Krewu IT Portfolio

## Original Problem Statement
Professional portfolio for IT operations & support technician Caleb Krewu, inspired by his CV. Black → turquoise gradient with white accents. Add certified knowledge: Python (online courses), Generative AI, Prompt Engineering, Supervised Machine Learning, Advanced Learning Algorithms, Trustworthy AI. Use the provided B&W portrait photo.

## Architecture
- Frontend: React 19 (CRA/craco), Tailwind, framer-motion (kinetic hero, scroll reveals), lenis (smooth scrolling), react-fast-marquee, lucide-react, sonner toasts. Photo at `/app/frontend/public/assets/caleb.png`.
- Backend: FastAPI, `/api/contact` POST (store enquiry) + GET (list enquiries), MongoDB via MONGO_URL/DB_NAME.
- Design: `/app/design_guidelines.json` — obsidian #050505 base, turquoise #0DF5E3 accents, Cabinet Grotesk / IBM Plex Sans / JetBrains Mono, grain overlay, numbered chapters.

## User Personas
- Recruiters/hiring managers evaluating Caleb for entry-level IT support / sysadmin roles.
- Caleb — receives contact form enquiries (stored in DB; no admin UI yet).

## Core Requirements (static)
- Single scrolling page, CV-accurate content, black/turquoise/white palette, provided portrait, added AI/ML/Python certifications, working contact form, CV links (email, phone, LinkedIn).

## Implemented (2026-08-12)
- Kinetic hero with masked line-by-line reveal, circular clipped B&W portrait with turquoise glow, rotating circular text ring, parallax neon city backdrop.
- Slow editorial skills marquee.
- Numbered chapters: 01 The Operator (summary, stats, principles), 02 Experience timeline (CAPACITI, D.A.D., Western Cape Government), 03 Certified Knowledge bento grid (Python, GenAI, Prompt Engineering, Supervised ML, Advanced Learning Algorithms, Trustworthy AI, Google AI Essentials, ICT Foundations), 04 Capabilities, 05 Education (UWC, Apex, training), 06 Contact (terminal-style form + details).
- Backend contact API verified; form saves enquiries to MongoDB with success toast.
- Fixed: replaced deprecated @studio-freight/react-lenis with `lenis` (React 19 invalid-hook-call crash).

## Implemented (2026-08-12, session 2)
- Mixed theme per user request: hero, marquee, contact, footer stay dark; About (white), Experience (mist #F4F4F2), Certifications (white), Skills (ash #E9E9E5), Education (mist) are now grey/white with dark ink text and darker teal accent (#00857A). New tailwind tokens: ink/mist/ash/turq-dark. ChapterHeading gained a `tone="light"` prop.
- Replaced hero portrait with user's newly uploaded B&W night-city photo (`/assets/caleb.png?v=2`) and made the portrait visible on mobile (was lg-only); verified visible at 390px.

## Backlog
- P0: none
- P1: Admin view/page for contact enquiries (currently readable via GET /api/contact only).
- P1: Downloadable CV PDF button.
- P2: References section (CV lists 3 referees — currently omitted for privacy).
- P2: Projects/case-study section with screenshots.
- P2: Custom favicon + OG share image.

## Next Tasks
1. Ask Caleb if references should be published; add section if yes.
2. Add "Download CV" button (generate PDF from CV docx).
3. Enquiries inbox page for Caleb.
