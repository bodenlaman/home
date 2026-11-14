---
title: "About"
layout: about
heading: '<span class="about__title-part">Minimal.</span> <span class="about__title-part">Fast.</span> <span class="about__title-part accent">Yours.</span>'
---

This is the About layout. It puts your prose and a couple of summary rows in the
left column, and a portrait with a row of social icons on the right.

`params.portrait` is deliberately unset on this demo site, so what you see to the
right is the empty frame. Point it at any image under `assets/` or `static/` and
the theme resizes it to 800px wide, converts it to WebP, and emits real dimensions
so the page never shifts as it loads.

The heading above comes from this page's `heading` front matter. The parts are
separate spans rather than one line with `<br>` tags: on a wide screen they stack,
and on a phone they reflow into a single sentence. A `<br>` cannot do both.

The rows below link to the certifications section and the resume. Each one appears
only if that page exists, so a site without certs never shows an empty Certs row.
