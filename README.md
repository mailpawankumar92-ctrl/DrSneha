# drsnehagoyal.com

Website for Dr. Sneha Goyal — Clinical Psychologist, Enable Workplace Consulting, Melbourne CBD.

## Structure

```
index.html          ← Main site (homepage)
blog/
  index.html        ← Blog listing page
  adhd-psychologist-melbourne.html
  adult-adhd-diagnosis-melbourne.html
  adhd-in-women-melbourne.html
  anxiety-adhd-melbourne.html
  depression-adhd-melbourne.html
  panic-disorder-adhd-melbourne.html
  trauma-adhd-melbourne.html
  ocd-adhd-melbourne.html
  emotion-regulation-adhd-melbourne.html
  perfectionism-addiction-adhd-melbourne.html
netlify.toml        ← Netlify config (headers, publish dir)
_redirects          ← URL redirects (blog.html → blog/, pretty URLs)
sitemap.xml         ← XML sitemap for Google Search Console
robots.txt          ← Search engine crawl rules
```

## Deployment

Connected to Netlify via GitHub. Every push to `main` triggers a deploy.

**Netlify settings:**
- Build command: *(none — static site)*
- Publish directory: `.` (root)
- Domain: www.drsnehagoyal.com

## After deploying

1. Go to Google Search Console → submit `https://www.drsnehagoyal.com/sitemap.xml`
2. Verify Google Analytics tag `G-12Q1JF38PZ` is firing (check GA4 real-time)
3. Set `www.drsnehagoyal.com` as primary domain in Netlify → Domain settings

## Updating content

All content is in plain HTML files. Edit directly and push to `main`.
