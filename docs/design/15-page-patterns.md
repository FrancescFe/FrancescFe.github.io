# Page and Content Patterns

This document defines the implementation-ready composition patterns for the Homepage, dedicated project pages, Resume and NumPairs Privacy Policy.

These patterns describe hierarchy and reusable composition rather than hard-coding page content into individual components.

---

## 1. Homepage

The Homepage is the main portfolio discovery experience.

Its editorial pattern is:

`introduction → catalogue`

The page follows this sequence:

```text
SiteHeader
Hero
Projects List
SiteFooter
```

Long-form project case studies are intentionally excluded from the Homepage.

---

## 2. Homepage Hero

The Hero establishes identity and professional positioning.

Content structure:

- Identity;
- Professional tagline;
- Short introduction;
- Core stack;
- Engineering competencies.

Availability claims and decorative terminal simulation are not part of the v1 Hero.

---

## 3. Capabilities

A compact technical area within the Hero communicates representative capabilities or competencies.

The pattern should use structured technical content rather than decorative code with no informational purpose.

The v1 representation uses concise technology metadata rather than a separate decorative terminal or code panel.

---

## 4. Projects List

The Projects List begins with a `SectionHeader` titled `Selected projects`.

The catalogue contains exactly two `ProjectCard` instances in this order:

1. NumPairs, linking to `/projects/numpairs/`;
2. Book Publishing Platform, linking to `/projects/book-publishing/`.

Cards use the approved concise description and selected technical metadata. They are compact and text-first, without large previews, project-status badges or long-form narrative.

Each card uses a standard semantic link to its dedicated route. The structure should scale naturally to additional projects.

---

## 5. Project Detail

Each project case study is published on a dedicated route and follows this conceptual hierarchy:

- Project metadata / breadcrumb;
- Title;
- Short project description;
- Primary visual;
- Capabilities, metrics or technical evidence;
- Main technical narrative;
- Technical metadata / sidebar;
- Actions;
- Optional supporting media.

The exact content may vary by project.

The design system must not require artificial benchmark or metric content where none is meaningful.

Every project page uses the shared portfolio shell, provides a clear route back to the portfolio and may apply a scoped project identity.

Actions may include:

- source repository;
- live product;
- store listing;
- relevant documentation;
- Privacy Policy.

---

## 6. NumPairs case study

NumPairs is one of the two v1 projects using the Project Detail pattern.

Its content should focus on authentic information such as:

- game concept;
- Android implementation;
- Kotlin and Jetpack Compose;
- architecture;
- puzzle generation or solving logic;
- development decisions;
- screenshots;
- GitHub repository;
- Google Play availability when applicable.

Placeholder benchmarks or fictional system metrics from the exploratory mockups must not be treated as production content.

---

## 7. Book Publishing Platform case study

Book Publishing is presented as one end-to-end platform at `/projects/book-publishing/`.

The case study uses a backend-led narrative and should cover authentic information such as:

- Kotlin and Spring Boot implementation;
- domain modelling and architecture;
- persistence, security and testing;
- delivery practices;
- the Android administration app as the platform client;
- the versioned OpenAPI specification as the contract across system boundaries;
- backend, app, API-spec and documentation repositories as separately labelled resources.

The Android app, API specification and documentation are supporting parts of the platform story rather than independent portfolio projects.

---

## 8. Resume

The Resume uses a professional-document pattern:

- `SiteHeader` (`compact`);
- Professional identity;
- Resume actions;
- Professional experience;
- Skills / competency matrix;
- Additional professional information;
- `SiteFooter` (`minimal`).

### Identity

Includes:

- name;
- professional role;
- concise professional summary;
- relevant location or availability information where desired.

### Export action

The Resume exposes an export or print action when implemented.

#### Desktop

The action may appear alongside the identity.

#### Mobile

The action moves below the identity content.

### Professional experience

Uses repeated `TimelineItem` components.

#### Desktop presentation

`date | role and organisation | description`

#### Mobile presentation

Vertical chronological blocks.

### Skills

Skills should use structured groups or a competency matrix.

They should remain readable by assistive technologies and must not depend solely on a visual chart.

---

## 9. Privacy Policy

The Privacy Policy uses a legal-document pattern:

- `SiteHeader` (`compact`);
- Legal eyebrow;
- Page title;
- Last updated date;
- `Legal sections*`;
- Relevant contact or contextual link;
- `SiteFooter` (`minimal`).

The primary reading container uses `content/reading-max = 960px`.

Paragraphs must not exceed `80ch`.

Legal sections use the `LegalSection` pattern.

---

## 10. Legal section hierarchy

Each legal section contains:

- Section number;
- Section heading;
- One or more paragraphs;
- Optional semantic links.

HTML heading structure must remain sequential.

Section numbers are supporting information and do not replace semantic headings.

---

## 11. Global footer

Homepage: `SiteFooter/full`.

Resume and Privacy Policy: `SiteFooter/minimal`.

The footer contains copyright information.

GitHub and LinkedIn are available from the global header.

Email is intentionally excluded.

---

## 12. Scroll-to-top

Any page whose final content length significantly exceeds the normal viewport may use `ScrollToTop`. The compact Homepage does not require it merely because the original mockup included long-form project sections.

The control is not part of document flow and does not replace normal navigation.

Its purpose is purely to make navigation through long pages more convenient.
