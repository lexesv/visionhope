# Vision Treatment Journey v1.2.0

Static GitHub Pages website for a documented treatment story and fundraising campaign.

## Structure

- `/uk/` — Ukrainian pages.
- `/en/` — English pages.
- `/assets/data/` — JSON data files.
- `/assets/docs/` — medical documents grouped by archive/date.
- `/assets/css/site.css` — custom styles.
- `/assets/js/site.js` — dynamic rendering for timeline, documents, updates and support methods.

## Before publishing

1. Replace `https://visionhope.pp.ua` in HTML files, `robots.txt`, `sitemap.xml`, and `assets/data/config.json` with your real domain.
2. Edit `assets/data/support.json` and replace placeholder payment details.
3. Add a real Open Graph image at `assets/img/og-image.jpg`.
4. Review all documents and remove or mask any personal data you do not want public.
5. Rename `CNAME.example` to `CNAME` and put your domain inside if using GitHub Pages with a custom domain.

## Updating support progress

Edit `assets/data/support.json`:

```json
{
  "goal": 36000,
  "raised": 0,
  "currency": "USD"
}
```

## Adding a document

1. Copy the file to `assets/docs/<year-or-date>/`.
2. Add one object to `assets/data/documents.json`.
3. Commit and push.

## Adding an update

Add a new item to `assets/data/updates.json`.

## Adding a language

1. Create a new folder, e.g. `/es/`.
2. Copy HTML pages from `/en/` or `/uk/` and translate content.
3. Add the language to `assets/data/languages.json`.
4. Add the pages to `sitemap.xml` and add `hreflang` links in HTML.

## GitHub Pages

Upload the repository to GitHub and enable Pages from the default branch. The site is fully static and does not require a backend.

## Notes

This website is not medical advice. It is a personal documentation and fundraising website.


## Release files

- `VERSION` — current repository version.
- `CHANGELOG.md` — release history.
- `ROADMAP.md` — planned future versions.
- `RELEASE_NOTES.md` — checklist for this release.

## Recommended release flow

1. Publish the repository privately first.
2. Replace the domain placeholder.
3. Check all pages locally.
4. Review medical documents and mask private data.
5. Add real support methods.
6. Enable GitHub Pages.
7. Connect the custom domain through Cloudflare.
