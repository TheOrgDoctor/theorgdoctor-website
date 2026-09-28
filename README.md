# The Org Doctor — Website

Next.js site for theorgdoctor.com, built from the approved brand/content brief.

## Local development

```bash
npm install
npm run dev
```

## Deploying on Render

1. Push this repo to GitHub (see below).
2. In Render, create a **New Web Service** and connect this GitHub repo.
3. Settings:
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start`
   - **Instance type:** Pro (or Hobby for testing)
4. Once deployed, add `theorgdoctor.com` and `www.theorgdoctor.com` under **Settings → Custom Domains**, and update DNS at your registrar with the records Render provides.

## Pushing to GitHub for the first time

```bash
git remote add origin https://github.com/<your-username>/theorgdoctor-website.git
git branch -M main
git push -u origin main
```

## Notes

- Contact form currently opens the visitor's email client pre-filled to patrick@theorgdoctor.com (no backend required). If you want silent form submission with a database of leads, that needs a small backend addition — flag it and we can wire it up.
- Redirects are configured in `next.config.ts` for the old `/new-page` and `/new-page-1` Squarespace slugs.
- Credential badge images (`public/images/badge-*.png`) still have the solid color block under them from the original export — swap in cleaner versions from each certifying body's brand kit when available.
- Open items carried over from the content brief and not yet resolved: final hero headline choice, MBE/WBE certification mention, whether to publish the firm's physical address, and new Contact page photography.
