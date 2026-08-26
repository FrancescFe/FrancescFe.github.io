# Shared Components

This document defines the reusable component contracts required by the Portfolio MVP.

The purpose of these specifications is to ensure that Stage 3 can implement components without inferring behavior from static mockups.

---

## 1. SiteHeader

The shared site header provides portfolio identity and access to the Resume.

### Variants

- `default`
- `compact`

### Default

Used where sufficient vertical space is available.

May include the full portfolio identity and secondary technical labels defined by the approved mockups.

### Compact

Used on content-heavy pages such as Resume and Privacy Policy where navigation should occupy less visual space.

### States

Interactive elements support:

- default;
- hover;
- focus-visible;
- active;
- selected.

The currently active dedicated page must have a distinguishable selected state.

### Responsive behavior

Desktop may expose supporting labels or terminal-inspired metadata.

As viewport width decreases:

1. secondary labels are reduced first;
2. primary identity remains visible;
3. the Resume destination remains available.

Primary navigation actions must not disappear solely because the viewport becomes narrow.

---

## 2. SiteFooter

Shared footer displayed at the end of public pages.

### Variants

- `full`
- `minimal`

### Full

Used on the Homepage.

Contains:

- copyright information;
- GitHub link;
- LinkedIn link.

### Minimal

Used where a quieter footer is appropriate, including Resume and Privacy Policy.

### Responsive behavior

Desktop may arrange copyright and external links horizontally.

Mobile may stack or wrap them while preserving their reading order.

---

## 3. PageContainer

Provides the standard horizontal page constraint.

### Width

Maximum width:

`1280px`

### Horizontal padding

- Desktop: `80px`
- Tablet: `40px`
- Mobile: `20px`

The container remains centered within the viewport.

---

## 4. SectionHeader

Provides reusable section-level hierarchy.

### Slots

- eyebrow;
- title;
- description;
- optional metadata.

Not every slot is required.

### Typography

Eyebrow:

`type/label`

Title:

normally `type/h2`

Description:

`type/body`

Metadata:

`type/meta`

---

## 5. TerminalPanel

Technical visual container inspired by terminal and editor interfaces.

### Variants

- `code`
- `log`
- `matrix`
- `command`

### States

- default;
- focused;
- disabled.

### Behavior

Panels use semantic surface and border tokens.

Code-like content must preserve intentional whitespace.

Where content exceeds the available width, the panel must allow horizontal scrolling rather than destructive wrapping.

---

## 6. ProjectCard

Compact project representation used by the Homepage project catalogue.

### Variants

- `default`
- `featured`

### States

- default;
- hover;
- focus-visible;
- active;
- archived.

### Required content

- project name;
- short description or category;
- status;
- representative visual or preview where available.

### Interaction

The primary card interaction navigates to the corresponding stable project-detail anchor.

The card must expose link semantics and must remain keyboard accessible.

Hover must not be the only indication that the card is interactive.

### Archived state

Archived status must be communicated textually and not only through muted colors.

### Responsive behavior

Desktop:

up to two cards per row.

Mobile:

one card per row.

---

## 7. ProjectDetail

Reusable long-form project case-study structure.

### Slots

The component pattern supports:

- breadcrumb or project metadata;
- title;
- description;
- hero visual;
- capabilities or metrics;
- technical metadata;
- technical sidebar;
- actions;
- supporting screenshots or diagrams.

Slots are optional unless required by the content.

Projects should not be forced to display empty sections merely to maintain visual symmetry.

### Desktop

The primary content may be displayed alongside a technical sidebar.

### Tablet

The sidebar remains available with reduced width when space permits.

### Mobile

The layout becomes a single column.

Sidebar content moves below the main project content.

Primary actions may occupy the full available width.

---

## 8. StatusBadge

Communicates project or system status.

### Variants

- `active`
- `info`
- `beta`
- `warning`
- `error`
- `neutral`

### Requirement

A textual label is mandatory.

Color must reinforce status but must never be the sole carrier of meaning.

---

## 9. MetadataPanel

Structured technical metadata surface.

### Variants

- `compact`
- `expanded`

### Content

May contain:

- language;
- technologies;
- architecture;
- platform;
- status;
- repository metadata;
- release information.

Metadata should use semantic description-list markup where appropriate.

---

## 10. TimelineItem

Represents a Resume experience or education entry.

### Variants

- `current`
- `past`

### Desktop

Recommended structure:

`date | role and organisation | description`

### Mobile

Content becomes a vertical block:

1. date;
2. role;
3. organisation;
4. description.

Chronological meaning must remain understandable without relying on the visual timeline line.

---

## 11. LegalSection

Reusable section pattern for long-form legal content.

### Slots

- section number;
- title;
- body;
- optional semantic links.

### Layout

Sections use a maximum prose width of `80ch`.

Recommended vertical separation between legal sections:

`32px`

---

## 12. Button

### Variants

- `primary`
- `secondary`
- `ghost`
- `icon`

### Sizes

- `sm`
- `md`

### States

Every applicable variant defines:

- default;
- hover;
- focus-visible;
- active;
- disabled.

### Primary

Uses the accent color for the dominant action.

### Secondary

Uses a surface and border treatment with lower emphasis.

### Ghost

Uses minimal chrome and is appropriate for secondary navigation or low-emphasis actions.

### Disabled

Disabled buttons:

- must not respond to pointer or keyboard activation;
- must expose the native disabled state where possible;
- must use `color/text/disabled`;
- must not be represented by opacity alone if doing so causes insufficient contrast.

---

## 13. TextLink

Semantic inline or standalone link.

### States

- default;
- hover;
- visited where meaningful;
- focus-visible;
- active.

Links must remain distinguishable from surrounding body text without depending exclusively on color.

External links should not receive a special visual treatment unless the context benefits from it.

---

## 14. IconButton

Icon-only interactive control.

### States

- default;
- hover;
- focus-visible;
- active;
- disabled.

### Accessibility

Every icon-only button requires an accessible name.

Minimum interactive target:

`44 × 44px`

---

## 15. ScrollToTop

Floating icon button used on long pages.

### Visibility

Hidden while the user remains within the first:

`320px`

of vertical page scroll.

Visible after that threshold.

### Position

Desktop and tablet:

- right: `32px`;
- bottom: `32px`.

Mobile:

- right: `20px`;
- bottom: `20px`.

The button must not overlap content that is essential for interaction.

### Action

Activating the control navigates the viewport to the top of the current document.

### Keyboard behavior

The control behaves as a normal semantic button and is reachable through sequential keyboard navigation while visible.

### Motion

Normal preference:

smooth scrolling may use the browser's native smooth-scroll behavior.

Reduced motion:

scroll immediately without animation.