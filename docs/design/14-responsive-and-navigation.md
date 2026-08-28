# Responsive and Navigation Rules

This document formalizes layout adaptation, project-route navigation and responsive interaction behavior.

---

## 1. Layout ranges

### Desktop

`>=1200px`

Characteristics:

- maximum site width of `1280px`;
- horizontal page padding of `80px`;
- two-column project catalogue where appropriate;
- dedicated project pages may use main-content and sidebar columns;
- full supporting navigation labels may be displayed.

### Tablet

`768px–1199px`

Characteristics:

- horizontal page padding of `40px`;
- project layouts reduce column width and gaps;
- dedicated project pages may retain a narrower sidebar where usable;
- supporting labels may be simplified.

### Mobile

`<768px`

Characteristics:

- horizontal page padding of `20px`;
- single-column project layouts;
- project sidebars move below main content;
- dense Resume rows become vertical content blocks;
- primary actions may expand to available width;
- secondary header labels may be removed before primary actions.

---

## 2. Responsive typography

The Hero display typography adapts across layout ranges.

| Range   | Hero size |
| ------- | --------: |
| Desktop |      56px |
| Tablet  |      44px |
| Mobile  |      36px |

Line height should scale proportionally while preserving the hierarchy established by the desktop design.

Body copy remains based on `type/body` unless a specific content pattern defines otherwise.

---

## 3. Project catalogue

Desktop supports a two-column project grid.

Tablet may preserve two columns when card width remains usable.

Mobile uses one column.

Project-card content must not be removed simply to maintain the multi-column layout.

---

## 4. Project detail

Desktop:

- main project content;
- technical sidebar.

Tablet:

- reduced sidebar width;
- layout remains two-column only while both columns retain useful reading width.

Mobile:

- single-column;
- sidebar content follows the primary content;
- actions may become full-width.

---

## 5. Resume

Desktop timeline rows use the pattern:

`date | position | description`

Mobile timeline items become self-contained vertical blocks.

The order must remain:

1. date or period;
2. role;
3. organisation;
4. supporting description.

The Resume export action appears alongside the professional identity on wider layouts.

On mobile, it moves below the identity block.

---

## 6. Privacy Policy

The Privacy Policy uses:

`content/reading-max = 960px`

Normal paragraph measure must not exceed:

`80ch`

Sections use approximately:

`32px`

of vertical separation.

The page should prioritize reading comfort over alignment with wider portfolio grids.

---

## 7. Code and technical content

Code, command or matrix content must never be destructively wrapped merely to fit a narrow viewport.

When necessary:

```
overflow-x: auto;
```

Normal prose inside technical panels may still wrap naturally.

---

## 8. Project route navigation

Every project card must link to a stable dedicated route using a standard anchor element.

The v1 destinations are:

- NumPairs: `/projects/numpairs/`;
- Book Publishing Platform: `/projects/book-publishing/`.

Future project pages should follow `/projects/{project-slug}/`.

Each destination must render when visited directly and expose an appropriate canonical URL. Dedicated project pages must provide a clear route back to the portfolio.

JavaScript must not be required for project navigation.

---

## 9. Scroll behavior

Scroll-to-top behavior may use:

```
scroll-behavior: smooth;
```

When the user requests reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

Scroll-to-top must remain functional regardless of motion preference.

---

## 10. Touch targets

Interactive controls must provide at least `44 × 44px` of usable target area.

This requirement applies even where the visible graphic is smaller.

---

## 11. Focus and keyboard navigation

All interactive elements must:

- be reachable using normal keyboard navigation;
- expose a visible `focus-visible` state;
- retain a logical tab order;
- use native semantic elements wherever possible.

Project-card links, Resume navigation, professional-profile links and scroll-to-top must not depend on pointer interaction.

---

## 12. Responsive simplification principle

When space becomes constrained, the interface should simplify in this order:

1. reduce decorative or supporting metadata;
2. reduce non-essential labels;
3. collapse layout columns;
4. reposition actions;
5. preserve primary content and primary actions.

Essential content or navigation should not simply disappear because the viewport becomes smaller.
