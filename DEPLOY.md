# Deploy notes — audio.danogrodnik.com

## Live URLs

- Production alias: https://audio-site-theta.vercel.app
- Custom domain (on project, verified in Vercel): `audio.danogrodnik.com`

## DNS (Namecheap)

Vercel expects:

```
Type: A
Host: audio
Value: 76.76.21.21
TTL: Automatic
```

(Optional CNAME alternative some setups use: `audio` → `cname.vercel-dns.com`)

## Environment variables (Sensitive — must set in dashboard)

Portfolio vars are marked **Sensitive** and cannot be pulled/copied via CLI/API. In Vercel → **audio-site** → Settings → Environment Variables, add for Production + Preview:

| Name | Value |
|------|--------|
| `RESEND_API_KEY` | Same `re_...` as `personal-website-next` (or a new key from Resend) |
| `CONTACT_TO_EMAIL` | `dan.ogrodnik@gmail.com` |
| `CONTACT_FROM_EMAIL` | `Dan Ogrodnik <contact@mail.danogrodnik.com>` |

Then redeploy: `vercel --prod`

## Repo

https://github.com/Ogrods/audio-site
