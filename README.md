# drsnehagoyal.com

Static website for Dr. Sneha Goyal, Clinical Psychologist at Enable Workplace Consulting in Melbourne CBD.

## Current Structure

```text
index.html                         Home page
about.html                         About Dr. Goyal
services.html                      Services, process, fees and funding guidance
adhd-assessment-melbourne.html     SEO landing page for ADHD assessment and ADHD psychologist Melbourne
contact.html                       Booking, contact details and Google Maps embed
blog/
  index.html                       Resources listing and editorial plan
  *.html                           Existing long-form ADHD and mental health articles
assets/
  css/site.css                     Shared mobile-first design system
  js/site.js                       Mobile menu and delayed analytics loader
  img/                             Responsive doctor image variants
_redirects                         Netlify redirects
sitemap.xml                        XML sitemap
robots.txt                         Search engine crawl rules
```

## Deployment

Connected to Netlify via GitHub. Every push to `main` triggers a deploy.

Netlify settings:

- Build command: none - static site
- Publish directory: `.` root
- Canonical domain: `https://drsnehagoyal.com`

## SEO Notes

- Primary conversion page: `/adhd-assessment-melbourne.html`
- Priority local keywords: `ADHD psychologist Melbourne`, `ADHD assessment Melbourne`, `adult ADHD diagnosis Melbourne`, `ADHD therapy Melbourne`
- Submit sitemap in Google Search Console: `https://drsnehagoyal.com/sitemap.xml`
- The mobile experience uses system fonts, responsive local images and delayed analytics loading to improve PageSpeed.

## Updating Content

All content is in plain HTML files. Edit directly and push to `main`.
