# NumPairs Brand Foundations

This document defines the portfolio-side contract for the reusable NumPairs
brand foundation introduced by issue #31. It makes the product identity
available for later NumPairs-specific pages without applying it to an existing
portfolio surface.

## Consumption contract

The foundation is loaded with the global stylesheet but is scoped to an
explicit product boundary:

```html
<section data-product-theme="numpairs">
  <!-- NumPairs-specific page content -->
</section>
```

Future pages should consume the `--numpairs-*` semantic variables from that
scope. They should not copy Warm color values or redefine the product palette.
The scoped theme also aliases the shared portfolio `--color-*` roles within
that document boundary, so reusable shell components inherit Warm without
changing the global portfolio tokens.

The shared portfolio shell remains governed by the global tokens on all other
pages. The scoped selector and aliases are defined in
[`src/styles/numpairs.css`](../../src/styles/numpairs.css).

## Warm source mapping

The Warm appearance is derived from the current NumPairs implementation at
commit [`29a31d2`](https://github.com/CescFe/numpairs/tree/29a31d237fe94b7a66736409118cbee60fc70d38).

| Portfolio role | NumPairs source role |
| --- | --- |
| `--numpairs-color-background` | `NumPairsBackground` / Material `background` |
| `--numpairs-color-surface` | `NumPairsSurface` / Material `surface` |
| `--numpairs-color-surface-raised` | `NumPairsSurfaceRaised` / elevated surface containers |
| `--numpairs-color-surface-subtle` | `NumPairsSurfaceSubtle` / `surfaceVariant` |
| `--numpairs-color-text-primary` | `NumPairsOnSurface` / `onBackground` and `onSurface` |
| `--numpairs-color-text-secondary` | `NumPairsOnSurfaceVariant` / `onSurfaceVariant` |
| `--numpairs-color-border` | `NumPairsOutline` / `outline` |
| `--numpairs-color-border-subtle` | `NumPairsOutlineVariant` / `outlineVariant` |
| `--numpairs-color-brand-primary` | `NumPairsGreen` / `primary` |
| `--numpairs-color-brand-container` | `NumPairsGreenSoft` / `primaryContainer` |
| `--numpairs-color-accent-secondary` | `NumPairsFocus` / secondary appearance accent |
| `--numpairs-color-accent-supporting` | `NumPairsSand` / supporting appearance accent |
| `--numpairs-color-status-error*` | `NumPairsError*` / general error contract |

The remaining semantic variables in the CSS preserve the Warm success and
error content roles without reproducing Android Material components or
gameplay-specific states. Color must not be the only state cue when status
roles are used.

Canonical source files:

- [Visual direction](https://github.com/CescFe/numpairs/blob/29a31d237fe94b7a66736409118cbee60fc70d38/docs/product/visual-direction.md)
- [Visual design system](https://github.com/CescFe/numpairs/blob/29a31d237fe94b7a66736409118cbee60fc70d38/docs/product/visual-design-system.md)
- [Warm color primitives](https://github.com/CescFe/numpairs/blob/29a31d237fe94b7a66736409118cbee60fc70d38/app/src/main/java/org/cescfe/numpairs/ui/theme/Color.kt)
- [Warm theme mapping](https://github.com/CescFe/numpairs/blob/29a31d237fe94b7a66736409118cbee60fc70d38/app/src/main/java/org/cescfe/numpairs/ui/theme/NumPairsThemeDefinition.kt)

## Typography contract

- `--numpairs-font-family-ui` exposes local Inter for general product UI and
  supporting content.
- `--numpairs-font-family-puzzle` aliases the portfolio's existing JetBrains
  Mono family, so the product foundation does not duplicate those assets.
- The size, line-height, and weight variables cover the product roles reflected
  in NumPairs' `Type.kt` and `NumPairsTextStyles.kt`: UI headings, titles,
  body copy, labels, puzzle expressions, results, strip values, and puzzle
  labels.

Inter is bundled as the official Inter 4.1 variable webfont in
[`src/assets/fonts/inter`](../../src/assets/fonts/inter), with its SIL Open
Font License 1.1 beside the asset. The local JetBrains Mono license remains
the existing source of truth for the shared puzzle family.

## Symbol contract

[`numpairs-symbol.svg`](../../src/assets/icons/brands/numpairs-symbol.svg) is
derived directly from the five paths and scale group in
[`ic_numpairs.xml`](https://github.com/CescFe/numpairs/blob/29a31d237fe94b7a66736409118cbee60fc70d38/app/src/main/res/drawable/ic_numpairs.xml).
It preserves the horizontal `? [+×] ?` composition and uses `currentColor`
instead of a hard-coded fill, so an inline or mask-based use can adopt the
consuming context's semantic color.
