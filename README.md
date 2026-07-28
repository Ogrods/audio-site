# Dan Ogrodnik — Audio hire site

One-pager for live sound, session engineering, music direction, and studio / apprenticeship paths.

**Live:** [audio.danogrodnik.com](https://audio.danogrodnik.com)

## Stack

Next.js 15 (App Router), React 19, Tailwind CSS v4, Resend contact API, Vercel.

## Develop

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set Resend keys for the contact form.

## Deploy

```bash
vercel
vercel --prod
vercel env add RESEND_API_KEY
vercel env add CONTACT_TO_EMAIL
vercel env add CONTACT_FROM_EMAIL
vercel domains add audio.danogrodnik.com
```

Point Namecheap CNAME `audio` → Vercel DNS target shown in the dashboard.

## Content

Edit `src/content/site.ts`. Resume PDF: `public/Dan_Ogrodnik_Audio_Resume.pdf`.
