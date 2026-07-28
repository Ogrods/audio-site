# Audio site deploy

## Live URLs

- Production alias: https://audio-site-theta.vercel.app
- Custom domain (after DNS): https://audio.danogrodnik.com
- GitHub: https://github.com/Ogrods/audio-site

## Namecheap DNS (required once)

In Namecheap → Domain List → `danogrodnik.com` → Manage → Advanced DNS, add:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | `audio` | `e27d5c0a0be3f5df.vercel-dns-017.com.` | Automatic |

(Fallback if Vercel shows a different target: `cname.vercel-dns.com.`)

Then run:

```powershell
cd audio-site
vercel domains verify audio.danogrodnik.com
```

## Resend env (required for contact form)

Vercel project `audio-site` needs the same keys as the webdev portfolio. Sensitive `RESEND_API_KEY` cannot be pulled from Vercel CLI, so add it manually:

1. Resend → API Keys → copy `re_...` (or create one scoped to `mail.danogrodnik.com`)
2. Vercel → `audio-site` → Settings → Environment Variables:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_...` |
| `CONTACT_TO_EMAIL` | `Dan.Ogrodnik@gmail.com` |
| `CONTACT_FROM_EMAIL` | `Dan Ogrodnik <contact@mail.danogrodnik.com>` |

3. Redeploy: `vercel --prod`

`CONTACT_TO` / `CONTACT_FROM` may already be set via CLI.
