# Stage 2 Design Decisions

Stage 1 intentionally deferred implementation-level design-system decisions until the approved visual direction was stable.

Stage 2 resolves those decisions through the implementation handoff documented in this directory.

## Resolution index

| Stage 1 deferred decision                          | Resolution                                                                                                          |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Definitive semantic color tokens                   | [Design Tokens](./12-design-tokens.md#2-color)                                                                      |
| Complete typography scale                          | [Design Tokens](./12-design-tokens.md#3-typography)                                                                 |
| Spacing scale                                      | [Design Tokens](./12-design-tokens.md#4-spacing)                                                                    |
| Responsive breakpoints                             | [Design Tokens](./12-design-tokens.md#10-breakpoints)                                                               |
| Maximum content widths                             | [Design Tokens](./12-design-tokens.md#8-content-widths)                                                             |
| Border and radius tokens                           | [Design Tokens](./12-design-tokens.md#5-radius) and [Design Tokens](./12-design-tokens.md#6-borders)                |
| Elevation                                          | [Design Tokens](./12-design-tokens.md#7-elevation)                                                                  |
| Motion                                             | [Design Tokens](./12-design-tokens.md#11-motion)                                                                    |
| Button variants                                    | [Shared Components](./13-components.md#12-button)                                                                   |
| Link states                                        | [Shared Components](./13-components.md#13-textlink)                                                                 |
| Project-card variants                              | [Shared Components](./13-components.md#6-projectcard)                                                               |
| Project-detail content patterns                    | [Shared Components](./13-components.md#7-projectdetail) and [Page Patterns](./15-page-patterns.md#5-project-detail) |
| Navigation component specification                 | [Shared Components](./13-components.md#1-siteheader)                                                                |
| Focus-ring specification                           | [Design Tokens](./12-design-tokens.md#12-focus)                                                                     |
| Hover, active and disabled states                  | [Shared Components](./13-components.md)                                                                             |
| Scroll-to-top visibility threshold and positioning | [Shared Components](./13-components.md#15-scrolltotop)                                                              |
| Project route navigation                           | [Responsive and Navigation Rules](./14-responsive-and-navigation.md#8-project-route-navigation)                     |
| Responsive project behavior                        | [Responsive and Navigation Rules](./14-responsive-and-navigation.md#3-project-catalogue)                            |
| Responsive Resume behavior                         | [Responsive and Navigation Rules](./14-responsive-and-navigation.md#5-resume)                                       |
| Long-form Privacy Policy layout                    | [Page Patterns](./15-page-patterns.md#9-privacy-policy)                                                             |
| Required fonts, icons and imagery                  | [Assets and Implementation Handoff](./16-assets-and-handoff.md)                                                     |

## Remaining implementation decisions

No unresolved visual-system decision from Stage 1 is intentionally deferred beyond Stage 2.

Stage 3 may make normal frontend engineering decisions where they do not alter the contracts documented here.

Any implementation constraint that requires changing the approved design system should be documented and reviewed before the design contract is modified.
