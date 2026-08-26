# Page and Content Patterns

This document defines the implementation-ready composition patterns for the Homepage, Resume and NumPairs Privacy Policy.

These patterns describe hierarchy and reusable composition rather than hard-coding page content into individual components.

---

## 1. Homepage

The Homepage is the main portfolio experience.

Its editorial pattern is:

`introduction → catalogue → technical evidence`

The page follows this sequence:

```text
SiteHeader
Hero
Capabilities / Terminal
Projects List
Project Detail*
SiteFooter
ScrollToTop
Project Detail* represents one or more project case-study sections.

2. Homepage Hero

The Hero establishes identity and professional positioning.

Recommended content structure:

Identity
Professional tagline
Short introduction
Availability / professional status
Primary technical motif

The technical motif may use TerminalPanel but should remain secondary to the identity and introduction.

3. Capabilities

A compact technical area may communicate representative capabilities or competencies.

The pattern should use structured technical content rather than decorative code with no informational purpose.

Suitable representations include:

command output;
capability matrix;
compact terminal log;
technology metadata.
4. Projects List

The Projects List begins with a SectionHeader.

The catalogue follows with one or more ProjectCard instances.

Each card links directly to its corresponding project-detail anchor.

The structure must remain usable with a single project while scaling naturally to additional projects.

5. Project Detail

Each project case study follows this conceptual hierarchy:

Project metadata / breadcrumb
Title
Short project description
Primary visual
Capabilities, metrics or technical evidence
Main technical narrative
Technical metadata / sidebar
Actions
Optional supporting media

The exact content may vary by project.

The design system must not require artificial benchmark or metric content where none is meaningful.

Actions may include:

source repository;
live product;
store listing;
relevant documentation;
Privacy Policy.
6. NumPairs case study

NumPairs is the initial project used to validate the Project Detail pattern.

Its content should focus on authentic information such as:

game concept;
Android implementation;
Kotlin and Jetpack Compose;
architecture;
puzzle generation or solving logic;
development decisions;
screenshots;
GitHub repository;
Google Play availability when applicable.

Placeholder benchmarks or fictional system metrics from the exploratory mockups must not be treated as production content.

7. Resume

The Resume uses a professional-document pattern:

SiteHeader (compact)
Professional identity
Resume actions
Professional experience
Skills / competency matrix
Additional professional information
SiteFooter (minimal)
Identity

Includes:

name;
professional role;
concise professional summary;
relevant location or availability information where desired.
Export action

The Resume exposes an export or print action when implemented.

Desktop:

the action may appear alongside the identity.

Mobile:

the action moves below the identity content.

Professional experience

Uses repeated TimelineItem components.

Desktop presentation:

date | role and organisation | description

Mobile presentation:

vertical chronological blocks.

Skills

Skills should use structured groups or a competency matrix.

They should remain readable by assistive technologies and must not depend solely on a visual chart.

8. Privacy Policy

The Privacy Policy uses a legal-document pattern:

SiteHeader (compact)
Legal eyebrow
Page title
Last updated date
Legal sections*
Relevant contact or contextual link
SiteFooter (minimal)

The primary reading container uses:

content/reading-max = 960px

Paragraphs must not exceed:

80ch

Legal sections use the LegalSection pattern.

9. Legal section hierarchy

Each legal section contains:

Section number
Section heading
One or more paragraphs
Optional semantic links

HTML heading structure must remain sequential.

Section numbers are supporting information and do not replace semantic headings.

10. Global footer

Homepage:

SiteFooter/full

Resume and Privacy Policy:

SiteFooter/minimal

The footer contains:

copyright;
GitHub;
LinkedIn.

Email is intentionally excluded.

11. Scroll-to-top

The Homepage and any other page whose content exceeds the normal viewport significantly use ScrollToTop.

The control is not part of document flow and does not replace normal navigation.

Its purpose is purely to make navigation through long pages more convenient.