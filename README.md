# R&G Construction sample website

A complete static marketing site for R&G Construction Co. in Marshall, Minnesota. Built with Astro and Tailwind CSS, with no login, CMS, or database dependency.

Live site: https://afrocoder16.github.io/RG-construction/

## Run locally

```sh
npm install
npm run dev
```

Production verification:

```sh
npm run check
npm run build
```

## Pages

- Home
- Services
- Equipment & Fleet
- Projects with interactive filtering
- About
- Careers
- Contact / Request a Quote
- Online employment application

## Form behavior

The quote form validates in the browser and opens the visitor's email client with a structured message addressed to `quotes@randgconstruction.com`. The careers form uses the same privacy-friendly static approach to prepare a complete application for `jobs@randgconstruction.com`. For launch, either form can be connected to a hosted endpoint without changing the design.

## Easy-to-edit content

- `src/config/siteStatus.ts`: toggle “Currently Bidding” and “Now Hiring.”
- `src/data/metrics.ts`: company stats, credentials, and current-project placeholders.
- `src/data/fleet.ts`: representative equipment inventory.

All current-project, fleet, bonding, OSHA, DBE, and MnDOT prequalification placeholders are marked in code and visibly identified where legal or bidding claims require confirmation.

## Imagery

- `public/images/rg-hero.png` is an original AI-generated sample asset created for this concept.
- Supporting sample photos are from Pexels: photo IDs [18812422](https://www.pexels.com/photo/road-grader-on-mud-18812422/), [32576319](https://www.pexels.com/photo/heavy-construction-machine-on-sand-roadwork-site-32576319/), [19835005](https://www.pexels.com/photo/grader-in-countryside-19835005/), and [12182332](https://www.pexels.com/photo/construction-equipment-on-the-road-12182332/).
- Source comments mark every location that should receive approved R&G field photography before launch.

## Pre-launch checklist

- Confirm the project names, values, scopes, affiliations, and current job openings with R&G.
- Replace representative photography with approved company photography.
- Replace the placeholder Facebook link with the official profile URL.
- Connect the quote form to the production email/form service if a server-side submission is preferred.
- Add an approved downloadable employment application if R&G already has one.
