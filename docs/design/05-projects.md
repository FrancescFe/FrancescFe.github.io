## Project cards

Project cards provide the compact representation used in the Projects List.

They should communicate enough information to identify and differentiate a project without duplicating the full project description.

The v1 card content is:

- project name;
- concise description;
- selected technical metadata.

Cards are deliberately text-first and compact. Large previews and project-status badges are not part of the v1 Homepage catalogue; visual evidence belongs on the dedicated project page.

The primary card interaction should clearly communicate that the project can be opened.

Hover must not be the only indication of interactivity.

Each card links through standard navigation to its dedicated project route. Cards should form a reusable pattern capable of accommodating additional projects in future versions.

## Project-detail pages

Project-detail pages are designed as reusable case-study structures rather than one-off NumPairs content.

Individual projects may require different content, but they should share a recognizable hierarchy and visual language.

The structure should accommodate combinations of:

- overview;
- problem or motivation;
- technical implementation;
- architecture;
- technologies;
- relevant metrics;
- screenshots;
- external resources.

Not every project is required to use every content type.

The component and content model should therefore remain flexible enough to represent different kinds of software projects without forcing artificial uniformity.

The v1 routes are:

- `/projects/numpairs/`;
- `/projects/book-publishing/`.

Book Publishing is one platform-level case study. The backend leads its engineering narrative, while the Android app, versioned OpenAPI specification and supporting documentation demonstrate the platform's client, contract and decision context.
