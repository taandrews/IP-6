# IP-6 Research redesign

Source collected from http://www.ip-6.net/ on September 10, 2026.

## Content inventory

All eight main pages were downloaded into `source/`, with both original HTML and extracted text. `source/inventory.json` preserves page URLs, text, references, and figure URLs. `source/assets.json` records retrieval results. Thirty-two original files were preserved in `public/source`: 24 images and 8 PDFs.

| Original page | New route | Content |
| --- | --- | --- |
| / | / | Company introduction, molecular overview, research navigation |
| about-us.html | /about/ | IP6 history, cancer models, immune research, early clinical reports, patents |
| other-benefits.html | /benefits/ | Neuroscience, mineral crystallization, cardiovascular biology, additional cancer models, metabolism, radiation, bone research |
| The_Science.html | /science/ | Antioxidant chemistry, differentiation, signaling, angiogenesis, epigenetics, original diagrams |
| the-scientist.html | /scientist/ | Biography, qualifications, career, screening work, education, service, documents |
| what-s-new-.html | /news/ | Historical research insights, citrate chemistry, bone/dental work, combination studies, clinical pilot, books |
| faq.html | /faq/ | All six original question topics, with evidence and safety context |
| contact-us.html | /contact/ | Original public contact details, social references, email-draft form |

## Editorial decisions

- Preserve all major scientific topics with references; identify cell, animal, and early clinical evidence without presenting experimental findings as established treatment benefits.
- Retain original source copies for comparison. The public presentation is newly written, rather than an unqualified republication of historical medical claims.
- Correct the blanket claims about mineral absorption and universal safety using the linked Memorial Sloan Kettering overview and FDA food-safety records.
- Treat GRAS references as food-use context, not medical treatment approval. Do not claim current patent validity or regulatory approval.
- Preserve the 2004 conference reports, 2010 pilot study, patents, scientific books, and career chronology. News items are clearly historical.
- Remove the old scaffold's unsupported counts of 200+ IP6 studies and research in 30+ countries. The original biography's publication count is explicitly a historical statement about the scientist's full career.
- Do not carry over shopping links or the unrelated external link embedded in the old homepage. Commercial entities remain separate from this research property.
- Original link inventory also preserves historical media and third-party summaries. Public scientific citations prioritize PubMed, journal references, FDA, and the clinical overview.

## Source limitations

The external host `builder.sitearchitect.com` did not return the CT image `wsp02a7b_CTofLiverMet.jpg` or dental figure `wsp02a7b_ToothProtection.jpg`, including on a retry outside the network sandbox. Their surrounding research descriptions and references are preserved. No replacement scientific data images were fabricated. The hero is explicitly labeled conceptual visualization.

## Delivery

The existing GitHub Pages workflow and `/IP-6` base path remain the default build. Set `SITE_TARGET=sites` and `SITE_URL` to the Sites origin to create a root-path private review deployment. The postbuild script generates deployment-specific robots.txt and all seven legacy HTML-page redirects. Domain cutover requires a subsequent hosting/DNS action; no DNS changes were made as part of this redesign.

The contact form prepares a mailto draft and retains entered text. It does not falsely claim email delivery. Sending remains in the visitor's email application.

## Validation

Run the production build and `node scripts/verify-export.mjs` with matching deployment environment variables. The export check covers the eight content pages, internal links, local files, section anchors, titles, descriptions, h1 count, excluded content, original file sizes, and PDF signatures. A production build includes Next.js type checks.

The in-app browser preview capability was unavailable. No browser interaction or screenshot QA was performed in this session.
