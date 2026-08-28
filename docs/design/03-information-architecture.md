## Information architecture

The portfolio uses a deliberately compact information architecture built around a primary discovery surface and dedicated content routes.

### Homepage

The Homepage is the primary portfolio discovery experience.

It follows a deliberately short sequence:

`Hero → Projects List → Footer`

This structure allows visitors to understand the developer profile and choose a featured project without turning the Homepage into a collection of long-form case studies.

### Hero

The Hero introduces the developer through:

- name;
- professional tagline;
- short introduction;
- restrained terminal/code-inspired visual elements.

It should establish both professional positioning and the visual identity of the portfolio immediately.

### Projects List

The Projects List provides a compact overview of the featured projects.

Each project card acts as an entry point into the corresponding dedicated project page.

The v1 catalogue contains two compact, text-first cards:

- NumPairs, linking to `/projects/numpairs/`;
- Book Publishing Platform, linking to `/projects/book-publishing/`.

The Book Publishing Platform is represented as one end-to-end project. Its backend, Android app, OpenAPI specification and supporting documentation are parts or resources of the same platform rather than separate portfolio projects.

The catalogue should support additional projects without requiring a redesign.

### Project Details

Each featured project receives a substantial case study on a stable dedicated route.

Project pages may contain:

- project description;
- engineering context;
- technologies;
- architectural or technical decisions;
- relevant specifications or metrics;
- screenshots or other visual material;
- repository links;
- product links where applicable;
- related resources such as a Privacy Policy where appropriate.

Dedicated project pages retain the shared portfolio shell and may extend it with a scoped visual identity suited to the project.

### Resume

The Resume remains a dedicated page at `/resume/`.

It is intentionally separated from the Homepage because it serves a different purpose: presenting structured professional information that should be easy to read, reference, print, or export.

### Privacy Policy

The NumPairs Privacy Policy remains a dedicated page at `/numpairs/privacy-policy/`.

It is considered a functional/legal resource rather than part of the primary portfolio navigation.

For this reason, it is **not exposed through the global navigation** and is expected to be reached through its direct URL or relevant contextual links.

This keeps the primary navigation focused on the portfolio itself while preserving the stable public URL required for Google Play.
