# Design Tokens

This document defines the implementation-ready design tokens for the Portfolio MVP.

These values formalize the visual direction approved during Stage 1. Stage 3 implementation should consume these tokens rather than deriving values directly from the mockup exports.

---

## 1. Token architecture

Tokens follow three conceptual layers:

`primitive → semantic → component`

### Primitive tokens

Primitive tokens represent raw visual values such as colors, spacing units, font sizes, and radii.

They should not normally be referenced directly from application components.

Example:

`primitive/teal/400`

### Semantic tokens

Semantic tokens assign meaning to primitive values.

Example:

`color/accent/default`

### Component tokens

Component-level tokens may alias semantic tokens where a component requires a stable contract.

Example:

`button/primary/background/default`

Component tokens should only be introduced where they improve maintainability or isolate component-specific behavior.

---

## 2. Color

### Background

| Token             | Value     | Usage                               |
|-------------------|-----------|-------------------------------------|
| `color/bg/canvas` | `#090D16` | Main application background         |
| `color/bg/deep`   | `#090A0F` | Long-form Resume and legal surfaces |

### Surface

| Token                   | Value     | Usage                                  |
|-------------------------|-----------|----------------------------------------|
| `color/surface/default` | `#0F172A` | Cards, panels and standard surfaces    |
| `color/surface/raised`  | `#12141D` | Visually elevated or emphasized blocks |
| `color/surface/hover`   | `#1E293B` | Interactive surface hover state        |

### Text

| Token                  | Value     | Usage                           |
|------------------------|-----------|---------------------------------|
| `color/text/primary`   | `#F8FAFC` | Primary content and headings    |
| `color/text/secondary` | `#94A3B8` | Supporting and descriptive text |
| `color/text/tertiary`  | `#64748B` | Metadata and secondary labels   |
| `color/text/disabled`  | `#475569` | Disabled content                |

### Borders

| Token                 | Value     | Usage                                             |
|-----------------------|-----------|---------------------------------------------------|
| `color/border/subtle` | `#1E293B` | Standard separators and borders                   |
| `color/border/strong` | `#475569` | Emphasized boundaries and focus-adjacent elements |

### Accent

| Token                  | Value     | Usage                          |
|------------------------|-----------|--------------------------------|
| `color/accent/default` | `#2DD4BF` | Primary interactive accent     |
| `color/accent/subtle`  | `#134E4A` | Low-emphasis accent background |
| `color/accent/hover`   | `#5EEAD4` | Accent hover state             |

### Status

| Token                  | Value     | Usage                                 |
|------------------------|-----------|---------------------------------------|
| `color/status/success` | `#10B981` | Active, available or successful state |
| `color/status/info`    | `#3B82F6` | Informational state                   |
| `color/status/warning` | `#F97316` | Beta, experimental or warning state   |
| `color/status/error`   | `#EF4444` | Error or destructive state            |

### Overlay

| Token           | Value              |
|-----------------|--------------------|
| `color/overlay` | `rgb(0 0 0 / 64%)` |

Status information must never rely exclusively on color. Labels, text or icons must provide equivalent meaning.

Final foreground/background combinations must satisfy WCAG AA contrast requirements.

---

## 3. Typography

### Font family

The single visual typeface for v1 is **JetBrains Mono**.

Implementation fallback stack:

```
"JetBrains Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace
```

Font files should be self-hosted as local `woff2` assets rather than loaded from a third-party runtime service.

### Type scale

| Token          | Weight | Size | Line height |
|----------------|-------:|-----:|------------:|
| `type/display` |    800 | 56px |        64px |
| `type/h1`      |    700 | 36px |        44px |
| `type/h2`      |    800 | 32px |        40px |
| `type/h3`      |    700 | 18px |        26px |
| `type/title`   |    700 | 16px |        24px |
| `type/body`    |    400 | 14px |        22px |
| `type/body-sm` |    400 | 13px |        20px |
| `type/label`   |    700 | 13px |        18px |
| `type/meta`    |    500 | 12px |        18px |
| `type/caption` |    400 | 11px |        16px |

### Letter spacing

| Context                       | Value    |
|-------------------------------|----------|
| Body and headings             | `0`      |
| Uppercase labels and eyebrows | `0.04em` |

### Long-form measure

Normal prose should not exceed `80ch`.

This applies particularly to:

- project descriptions;
- Resume descriptions;
- Privacy Policy paragraphs.

---

## 4. Spacing

The spacing scale uses a `4px` base unit.

| Token      | Value |
|------------|------:|
| `space/1`  |   4px |
| `space/2`  |   8px |
| `space/3`  |  12px |
| `space/4`  |  16px |
| `space/5`  |  20px |
| `space/6`  |  24px |
| `space/7`  |  32px |
| `space/8`  |  40px |
| `space/9`  |  48px |
| `space/10` |  64px |
| `space/11` |  80px |
| `space/12` |  96px |

Arbitrary spacing values should be avoided unless required by a documented component constraint.

---

## 5. Radius

| Token         | Value |
|---------------|------:|
| `radius/none` |     0 |
| `radius/sm`   |   4px |
| `radius/md`   |   6px |
| `radius/lg`   |   8px |
| `radius/xl`   |  12px |
| `radius/full` | 999px |

---

## 6. Borders

| Token            | Value       |
|------------------|-------------|
| `border/default` | `1px solid` |

Border color must be provided through semantic color tokens.

The default panel and card border is `1px solid color/border/subtle`.

---

## 7. Elevation

Elevation is intentionally restrained because the interface relies primarily on background and border contrast.

| Token                | Value                          | Usage                                   |
|----------------------|--------------------------------|-----------------------------------------|
| `elevation/none`     | `none`                         | Standard surfaces                       |
| `elevation/raised`   | `0 8px 24px rgb(0 0 0 / 24%)`  | Raised panels and emphasized surfaces   |
| `elevation/floating` | `0 12px 32px rgb(0 0 0 / 32%)` | Floating controls such as scroll-to-top |

Elevation should not be used as the only mechanism for communicating interactivity.

---

## 8. Content widths

| Token                 | Value    |
|-----------------------|----------|
| `content/site-max`    | `1280px` |
| `content/reading-max` | `960px`  |
| `content/prose-max`   | `80ch`   |

The main site container is horizontally centered.

---

## 9. Viewport padding

| Range                   | Horizontal padding |
|-------------------------|-------------------:|
| Desktop (`>=1200px`)    |               80px |
| Tablet (`768px–1199px`) |               40px |
| Mobile (`<768px`)       |               20px |

Padding must not cause the content width to exceed `content/site-max`.

---

## 10. Breakpoints

The v1 system defines two layout breakpoints:

| Token                | Value    |
|----------------------|----------|
| `breakpoint/tablet`  | `768px`  |
| `breakpoint/desktop` | `1200px` |

Supported layout ranges are therefore:

- Mobile: `<768px`
- Tablet: `768px–1199px`
- Desktop: `>=1200px`

Breakpoints should represent layout transitions rather than specific device models.

---

## 11. Motion

Motion should remain functional and restrained.

| Token                     | Value                        |
|---------------------------|------------------------------|
| `motion/duration/fast`    | `120ms`                      |
| `motion/duration/default` | `180ms`                      |
| `motion/duration/slow`    | `240ms`                      |
| `motion/easing/standard`  | `cubic-bezier(0.2, 0, 0, 1)` |

`motion/duration/fast` should be used for simple state transitions such as color or border changes.

`motion/duration/default` should be used for interactive surfaces and floating controls.

`motion/duration/slow` should only be used where a larger spatial transition genuinely benefits comprehension.

When `prefers-reduced-motion: reduce` is active:

- non-essential animations must be disabled;
- scrolling must use immediate behavior rather than forced smooth scrolling;
- content must remain fully usable without animation.

---

## 12. Focus

Keyboard focus uses a clearly visible focus ring.

Recommended implementation contract:

```
outline: 2px solid #2DD4BF;
outline-offset: 3px;
```

Focus styling should use `:focus-visible` where supported.

Focus must not be represented by color change alone.

---

## 13. Interactive target size

Interactive controls must provide a minimum target area of `44 × 44px`.

This requirement applies to icon-only controls such as scroll-to-top even when the visible icon itself is smaller.
