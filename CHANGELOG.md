# Changelog

## [1.5.3] - 2026-07-19

### Changed
- Rebuilt `sitemap.xml` in a minimal, conventional Sitemap XML format.
- Removed the optional `xhtml:link` hreflang extension from the sitemap to simplify Google Search Console diagnostics.
- Added `changefreq` and `priority` hints while preserving all 18 Ukrainian and English page URLs.
- Synchronized the displayed project version to 1.5.3.

## [1.5.2] - 2026-07-19

### Repository Cleanup & Consistency

- Corrected the medical report dated 27 November 2021 that had been incorrectly presented as a 2026 current diagnosis.
- Consolidated three copies of the same 2021 retinal report into one optimized file with an ASCII-safe filename.
- Renamed the `14.02.2020(1)` archive directory to `14.02.2020`.
- Removed five byte-identical duplicate images from the 14 February 2020 examination set.
- Replaced raw image filenames in the document catalogue with clearer Ukrainian and English titles.
- Synchronized the project version to 1.5.2 without changing `support.json` or payment configuration.

## [1.5.0] - 2026-07-18

### SEO Foundation

- Optimized titles and meta descriptions across all Ukrainian and English pages.
- Added page-specific Schema.org JSON-LD: WebSite, Person, MedicalWebPage, MedicalCondition, ProfilePage, CollectionPage and BreadcrumbList.
- Expanded Open Graph and Twitter image metadata.
- Added explicit indexing, author and referrer metadata.
- Added multilingual hreflang annotations and last-modified dates to the XML sitemap.
- Expanded `llms.txt` with verified medical context and canonical page references.
- Optimized website and medical-document images without changing their content.
- Synchronized the project version to 1.5.0.

## 1.4.3 — Medical Consistency Update

- Replaced the English PMD diagnosis on the Ukrainian Medical Case page with the correct Ukrainian terminology.
- Added peripheral vitreochorioretinal / chorioretinal degeneration to the Key Diagnoses section on both home pages.
- Standardized the English retinal diagnosis terminology across the Medical Case page and timeline data.
- Synchronized the visible site version and configuration to 1.4.3.
- Changed the project status in `config.json` from `development` to `production`.

## 1.4.2 — Retinal Treatment History Update

- Added the emergency PPLC/retinal laser treatment of both eyes performed in 2008 to the Ukrainian and English home, Journey, Medical Case and Timeline content.
- Clearly disclosed that the 2008 procedure was performed at a public clinic before an exact diagnosis was established and that its medical records are unavailable.
- Distinguished the undocumented 2008 procedure from the documented repeat retinal laser treatment in 2021.
- Removed `<meta name="robots" content="noindex,follow">` from the root `index.html`.
- Left `assets/data/support.json` and the PayPal configuration unchanged.
- Synchronized the displayed project version to 1.4.2.

## 1.4.1 — Content & Trust Update

- Strengthened the Ukrainian and English home pages with a clearer explanation of the real-life impact of vision loss and the need for treatment support.
- Added a dedicated home-page section explaining why scleral lenses were not a viable solution.
- Expanded the scleral-lens history on the Journey pages with the adaptation period, pain, tearing, persistent discomfort and unstable vision.
- Updated the Medical Case pages to record the unsuccessful outcome of the scleral-lens trial.
- Improved the introductory text on the Support pages without changing `assets/data/support.json`.
- Preserved the PayPal configuration and `assets/img/paypal-qr.png` unchanged.
- Synchronized the displayed project version to 1.4.1.

## 1.4.0 — Production readiness audit

- Added `browserconfig.xml` and `llms.txt`.
- Corrected canonical and hreflang metadata, including the English privacy page.
- Aligned home-page canonical URLs with `sitemap.xml`.
- Added consistent social and application metadata.
- Rebuilt the root language selector and 404 page.
- Added navigation accessibility attributes.
- Updated the web app manifest and synchronized the displayed version.


## v1.3.3

Maintenance release:
- Synchronized the displayed project version across the site, README, and configuration.
- Corrected the English footer label on the privacy page.

## v1.2.0

Medical documents release:
- Added medical document folders under `assets/docs/`.
- Added `assets/data/documents.json`.
- Added `assets/data/timeline-master.json`.
- Added privacy pages for both languages.
- Added `ROADMAP.md`, `VERSION`, and `RELEASE_NOTES.md`.

## v1.1.0

English version:
- Added English pages under `/en/`.
- Added language switching between Ukrainian and English.
- Added English SEO metadata and hreflang links.

## v1.0.0

First public launch draft:
- Ukrainian static pages.
- Core structure for GitHub Pages.
- Support, updates, timeline and document rendering via JSON.
