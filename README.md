# Dan Ogrodnik - Audio hire site

One-pager for session & live musician, music direction, and session / live engineering (game-audio learning path noted separately).

**Live:** [audio.danogrodnik.com](https://audio.danogrodnik.com)

**Human maintenance guide (employment root):** [../AUDIO_PATH.md](../AUDIO_PATH.md)

## Stack

Next.js 15 (App Router), React 19, Tailwind CSS v4, Vercel. Contact is mailto to `dan@danogrodnik.com` (no form API).

## Develop

```bash
npm install
npm run dev
```

## Deploy

```bash
vercel --prod
```

DNS: Namecheap A record `audio` → `76.76.21.21`.

## Content

- Site copy / media: `src/content/site.ts`
- Full CV source: `content/Dan_Ogrodnik_Audio_CV.md` → `public/Dan_Ogrodnik_Audio_CV.pdf`
- Resume PDF: `public/Dan_Ogrodnik_Audio_Resume.pdf` (generated from `../resumes/Dan_Ogrodnik_Audio_Resume_2026_v1_ATS.md`)

See `DEPLOY.md` and `../AUDIO_PATH.md` for PDF regen commands and privacy rules.
