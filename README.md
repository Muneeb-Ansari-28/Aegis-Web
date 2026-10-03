# Aegis Website

Aegis is a static marketing and distribution website for a defensive LLM vulnerability scanner. It introduces the desktop product, explains how its authorized black-box assessments work, shows honest OWASP coverage, and provides download information when releases are available.

The website is a presentation site. Its scan console and assistant are scripted demonstrations; scan execution, authentication, dashboards, and backend services are not implemented here.

## Run locally

```sh
npm install
npm run dev
```

Create and preview a production build with:

```sh
npm run build
npm run preview
```

## Product and security boundaries

- Aegis is for authorized security testing of systems that the user owns or has permission to assess.
- Describe only capabilities that can be verified through authorized black-box testing. Do not claim that Aegis finds every vulnerability, guarantees security, or tests every category.
- Keep the authorized-testing disclaimer in the footer and download section.
- The website console is a scripted mock. It must not imply that a scan is actually running.
- The AI Assistant is a scripted sample interaction, not a live model. Its example reply explains that the target held its refusal boundary for all 12 checked turns, returned no protected content, and invites the user to inspect the evidence turns.
- Do not present unfinished downloads, documentation, or project links as live. Unknown URLs, versions, and checksums stay `TBD`; corresponding download buttons remain disabled.
- Do not add authentication, product dashboards, scan execution, or backend services to this website without an explicit scope change.

## Page content

The single-page site is ordered as follows:

1. **Hero:** “Break your LLM before attackers do.” Describes Aegis as an agentic scanner for authorized black-box testing of LLM-powered web and desktop apps. Provides desktop-download and product-tour actions.
2. **Scan console:** Scripted terminal activity and the Aegis AI Assistant panel.
3. **How it works:** Five stages—onboard, attack, evaluate, score, and report.
4. **Agentic evaluation:** Example assertions for refusal boundaries, system-prompt leakage, data exfiltration, and PII redaction.
5. **Local-first:** Local attack, judge, and assistant models; data stays on the machine; deterministic scoring.
6. **Audience:** Students and researchers, plus security teams and developers.
7. **Stats:** OWASP LLM categories, black-box assessment, local-model cost, and PDF reports. Keep figures accurate to the current build.
8. **OWASP coverage:** Ten LLM Top 10 categories with honest covered, partial, or not-black-box-testable statuses.
9. **Lab environment:** Prompt-injection practice scenario.
10. **Downloads:** Windows, macOS, and Linux cards, requirements, checksums, and authorized-testing notice. Unreleased values remain `TBD`.
11. **Documentation:** Installation, first scan, risk scores, assistant guide, and FAQ links.
12. **Final call to action:** “Start breaking things — safely.”
13. **Footer:** Product, resources, project/team information, and the authorized-testing disclaimer.

Primary page anchors: `#top`, `#console`, `#how`, `#evaluation`, `#local`, `#who`, `#coverage`, `#lab`, `#download`, `#docs`, and `#get`.

## Design and interactions

The current visual direction uses a warm cream background, white cards, fine warm-gray borders, near-black headings, muted gray body text, and restrained green accents. The terminal mockup retains its dark console appearance. The layout takes inspiration from the crisp editorial treatment of [DevOps Mentor](https://devopsmentor.vercel.app/), while keeping Aegis copy, logo, and illustrations original.

- **Typography:** Space Grotesk for display text, Inter for body text, and JetBrains Mono for technical labels.
- **Visuals:** Aegis shield artwork, radar motifs, and locally served favicon. Do not copy or hotlink reference-site assets or text.
- **Hero:** ThreeUI orbital-sphere background with a CSS radar/shield fallback when WebGL is unavailable. Pointer motion is subtle and disabled for reduced-motion preferences.
- **Terminal:** Simulated command typing and output, with reduced-motion support.
- **AI Assistant:** Accepts a one-time sample prompt, shows a thinking state, then the fixed scripted response. It resets on page refresh and does not call a model.
- **Local security diagram:** Three labels orbit the central shield. A label can be dragged a short distance; the other labels keep moving, and the dragged label eases back into its matching orbit position on release.
- **Navigation:** Fixed navigation, mobile menu, active-section indication, scroll progress, and section reveal motion.
- **Accessibility:** Semantic page structure, keyboard-visible focus, responsive layouts, and reduced-motion handling. Keep the page usable at narrow mobile widths.

Current palette values are maintained in `src/index.css` (including `#faf7f1` page background, `#ffffff` card surfaces, `#e7e1d8` borders, `#191813` primary text, and `#119447` green accent). Update design tokens there rather than scattering new colors through components.

## Implementation

- **Runtime:** React 18, TypeScript, and Vite.
- **Styling:** Tailwind CSS 3 with project-specific styling in `src/index.css`.
- **Motion:** Framer Motion, CSS animations, and pointer-based interaction.
- **3D:** ThreeUI / Three.js is isolated in the hero component and loaded separately.
- **Fonts:** Google Fonts (Space Grotesk, Inter, JetBrains Mono).
- **Deployment:** Static Vite build; suitable for Vercel. There are no server routes or APIs.

Important files:

- `src/App.tsx` — page composition, navigation, and hero scene.
- `src/content/copy.ts` — section copy, terminal script, and scripted assistant response.
- `src/config/site.ts` — GitHub, documentation, download URLs, versions, and checksums. Unknown values are `TBD`.
- `src/index.css` — design tokens, layouts, responsive styles, and interaction styles.
- `src/components/` — terminal, assistant, shield logo, orbital labels, and ThreeUI hero background.
- `index.html` — document metadata, browser title, fonts, and favicon reference.
- `public/favicon.png` — browser tab shield icon.

## Maintenance rules

- Keep marketing copy in `src/content/copy.ts`; keep deployment links and release metadata in `src/config/site.ts`.
- Preserve the authorized-testing disclaimer and honest OWASP coverage states.
- Prefer original Aegis artwork and truthful product descriptions.
- Respect `prefers-reduced-motion`; provide a usable static fallback for WebGL.
- Keep this as a static marketing and distribution site. Do not introduce fake-live links or claims.
