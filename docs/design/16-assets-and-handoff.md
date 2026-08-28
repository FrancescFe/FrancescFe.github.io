# Assets and Implementation Handoff

This document records the asset requirements and implementation constraints needed to reproduce the approved design without depending on the Figma file at runtime.

---

## 1. Typography assets

The primary typeface is:

**JetBrains Mono**

Font files should be sourced from the official JetBrains Mono distribution or another authoritative distribution of the same font.

Production should use local `woff2` assets committed to or bundled with the site.

The site should not depend on a third-party font request at runtime.

Required weights:

- 400 — Regular
- 500 — Medium
- 700 — Bold
- 800 — ExtraBold

Recommended fallback stack:

```
"JetBrains Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace
```

Only the weights actually used by the design system should be bundled.

---

## 2. Icons

The v1 design should minimize dependency on a general-purpose icon library.

Simple interface icons such as scroll-to-top may be implemented as lightweight inline SVG.

Icons must:

- use vector sources;
- inherit semantic foreground color where appropriate;
- expose no redundant accessible text when decorative;
- receive an accessible name through their control when they represent an icon-only action.

GitHub and LinkedIn links use locally embedded or bundled monochrome vector
marks. They must not require a remote asset request, and each icon-only link
must expose an accessible name through its anchor.

---

## 3. Project imagery

Project screenshots and visuals must be real product assets rather than fictional mockup content.

For NumPairs, preferred sources include:

- application screenshots;
- repository diagrams;
- relevant generated puzzle examples;
- official store artwork where applicable.

For the Book Publishing Platform, preferred sources include:

- screenshots from the Android administration app;
- architecture or API diagrams derived from the public repositories;
- relevant Editorial Denes brand assets where their reuse is authorized.

The compact Homepage cards do not require project imagery. Screenshots and other substantial visual evidence belong on the dedicated project pages.

Raster images should be exported at sufficient resolution for high-density displays and compressed appropriately for web delivery.

Decorative imagery should not be required to understand project content.

---

## 4. Figma exports

Figma exports are reference material and should not be treated as implementation assets unless explicitly identified as such.

Implementation should derive layout from documented tokens and component contracts rather than:

- measuring screenshot coordinates;
- sampling colors from PNG files;
- reproducing entire interface regions as raster images.

---

## 5. SVG assets

SVG is preferred for:

- icons;
- simple diagrams;
- technical decorative elements;
- scalable interface graphics.

SVG files should:

- use optimized paths;
- avoid embedded raster content where unnecessary;
- avoid external runtime dependencies;
- define accessible semantics when the graphic communicates content.

---

## 6. Runtime dependencies

The initial portfolio should not require third-party runtime services merely to reproduce its visual design.

In particular:

- fonts should be self-hosted;
- basic icons should be local;
- portfolio imagery should be local or intentionally linked product content;
- no runtime Figma dependency exists.

---

## 7. Design implementation source of truth

Stage 3 should use the following order of authority:

1. repository design-system documentation;
2. approved Figma source;
3. exported mockup images.

The PNG exports are visual references.

They should not override exact values documented in the design system.

---

## 8. Approved post-handoff changes

Stage 2 formalized the visual system without changing the information architecture shown in the original mockups.

Later milestone decisions supersede the original project-page composition in the following ways:

- the Homepage ends after a compact, text-first project catalogue and footer;
- long-form project case studies use dedicated routes;
- v1 features NumPairs and the Book Publishing Platform;
- Book Publishing is represented as one platform rather than separate repository entries.

These changes preserve the established visual language while replacing the mockup's information-architecture assumptions. The current repository documentation takes precedence over the original Homepage composition.

---

## 9. Accessibility implementation constraints

Assets and components must preserve:

- WCAG AA color contrast;
- visible keyboard focus;
- semantic HTML;
- non-color status cues;
- minimum `44 × 44px` interactive targets;
- reduced-motion behavior;
- meaningful alternative text for informative images.

Decorative assets should use empty alternative text or equivalent presentation semantics.

---

## 10. Implementation readiness

The design handoff is implementation-ready when contributors can determine, without measuring the mockups:

- which semantic color to use;
- which typography token applies;
- which spacing scale values are valid;
- how containers respond at each breakpoint;
- how shared components behave in all applicable states;
- how project route navigation behaves;
- when and where scroll-to-top appears;
- how Resume and legal content adapt to mobile;
- which local assets are required;
- which accessibility constraints are mandatory.
