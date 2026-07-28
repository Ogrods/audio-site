# Deploy notes - audio.danogrodnik.com

Full human guide: [../AUDIO_PATH.md](../AUDIO_PATH.md)

## Live

- https://audio.danogrodnik.com
- Project / fallback: Vercel project `audio-site` (Ogrods/audio-site)

## DNS (Namecheap)

```
Type: A
Host: audio
Value: 76.76.21.21
```

## Contact

Mailto to `dan@danogrodnik.com` - no Resend / API env vars required.

## Repo

https://github.com/Ogrods/audio-site

## PDFs

From `audio-site/`:

```powershell
# Full CV
Copy-Item ".\content\Dan_Ogrodnik_Audio_CV.md" ".\public\_cv_src.md" -Force
npx --yes md-to-pdf ".\public\_cv_src.md"
Move-Item ".\public\_cv_src.pdf" ".\public\Dan_Ogrodnik_Audio_CV.pdf" -Force
Remove-Item ".\public\_cv_src.md" -Force

# Resume (from employment resumes folder)
Copy-Item "..\resumes\Dan_Ogrodnik_Audio_Resume_2026_v1_ATS.md" ".\public\_resume_src.md" -Force
npx --yes md-to-pdf ".\public\_resume_src.md"
Move-Item ".\public\_resume_src.pdf" ".\public\Dan_Ogrodnik_Audio_Resume.pdf" -Force
Remove-Item ".\public\_resume_src.md" -Force
```

Then: `npx vercel --prod`

## Privacy

Do not commit `content/sources/` (gitignored). Do not publish street address. Full CV is email-only contact.
