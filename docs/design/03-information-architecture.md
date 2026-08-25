## Information architecture

The portfolio uses a deliberately compact information architecture built around one primary portfolio surface and two dedicated pages.

### Homepage

The Homepage is the primary portfolio experience.

Rather than separating project discovery and project details across multiple pages, the Homepage presents them as a continuous vertical sequence:

`Hero → Projects List → Project Details → Footer`

This structure allows visitors to understand the developer profile, discover available projects, and continue directly into detailed case studies without unnecessary page transitions.

### Hero

The Hero introduces the developer through:

- name;
- professional tagline;
- short introduction;
- restrained terminal/code-inspired visual elements.

It should establish both professional positioning and the visual identity of the portfolio immediately.

### Projects List

The Projects List provides a compact overview of the featured projects.

Each project card acts as an entry point into the corresponding project-detail section further down the Homepage.

Users can therefore discover projects in two complementary ways:

1. by continuing to scroll naturally through the page;
2. by selecting a project card and navigating directly to its detail section.

The initial portfolio contains NumPairs as its first featured project, but the structure should support additional projects without requiring a redesign.

### Project Details

Each featured project receives a substantial case-study section within the Homepage.

Project sections may contain:

- project description;
- engineering context;
- technologies;
- architectural or technical decisions;
- relevant specifications or metrics;
- screenshots or other visual material;
- repository links;
- product links where applicable;
- related resources such as a Privacy Policy where appropriate.

Project sections should use stable anchors so they can be linked and navigated to directly.

### Resume

The Resume remains a dedicated page at `/resume/`.

It is intentionally separated from the scrolling portfolio because it serves a different purpose: presenting structured professional information that should be easy to read, reference, print, or export.

### Privacy Policy

The NumPairs Privacy Policy remains a dedicated page at `/numpairs/privacy-policy/`.

It is considered a functional/legal resource rather than part of the primary portfolio navigation.

For this reason, it is **not exposed through the global navigation** and is expected to be reached through its direct URL or relevant contextual links.

This keeps the primary navigation focused on the portfolio itself while preserving the stable public URL required for Google Play.