# Design System Documentation

## 1. Overview & Creative North Star: "The Modern Heirloom"

The Creative North Star for this design system is **"The Modern Heirloom."** We are not building a generic e-commerce site; we are creating a digital atelier. The experience must feel as tactile and intentional as a hand-stamped card on heavy-weight cotton paper.

To achieve this, we move beyond the "boxed" layout of standard web apps. We embrace **Editorial Asymmetry**, where high-contrast typography scales and overlapping elements create a sense of curated depth. By breaking the rigid 12-column grid with intentional whitespace and "floating" image compositions, we mirror the layout of a premium lifestyle magazine. This is a space where the "Personal" in "Personal Prints" is felt through warmth, breathing room, and a rejection of industrial UI patterns.

---

## 2. Colors: Tonal Depth & Warmth

Our palette is rooted in the heritage of the holidays—deep forest greens and gilded accents—but executed with a contemporary, high-fashion sensibility.
- Primary color- #1B3022
- Secondary Color - #D4AF37
- Tertiary Color - #FF0000
- Neutral - #F9F6F0

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or containment. Traditional borders feel clinical and "default." Instead, define boundaries solely through background color shifts. For example, a `surface-container-low` section should sit against a `surface` background to create a soft, organic edge.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers of fine paper.
- Use the **Surface Tiers** (`surface-container-lowest` to `highest`) to define importance.
- A card should not have a border; it should be a `surface-container-lowest` element resting on a `surface-container-low` section. This creates "nested depth" that feels architectural rather than digital.

### The Glass & Gradient Rule
To prevent the forest green (`primary-container`: `#1b3022`) from feeling flat, apply subtle linear gradients transitioning to the `primary` (`#061b0e`) token.
- **Glassmorphism:** For floating navigation bars or celebratory overlays, use semi-transparent surface colors with a `backdrop-blur` (12px–20px). This allows the warm ivory tones of the background to bleed through, softening the interface.

---

## 3. Typography: The Editorial Voice

The typography is the backbone of our premium identity. It relies on the interplay between the authoritative **Noto Serif** and the approachable **Plus Jakarta Sans**.

- **Display & Headlines (Noto Serif):** These are our "Hero" moments. Use `display-lg` for impactful landing statements. The serif provides a sense of history and trust.
- **Body & Labels (Plus Jakarta Sans):** These provide modern clarity. Use `body-lg` for product descriptions to ensure a clean, breathable reading experience.
- **Intentional Contrast:** Always pair a large `display-sm` serif headline with a tiny, tracked-out `label-md` sans-serif subhead in all caps. This "High-Low" pairing is a hallmark of high-end editorial design.

---

## 4. Elevation & Depth: Tonal Layering

We reject the standard "Material" drop shadow. Elevation in this system is a whisper, not a shout.

- **The Layering Principle:** Depth is achieved by "stacking" surface tokens. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift without a single line of CSS shadow.
- **Ambient Shadows:** When a floating element (like a "Quick View" modal) is required, use **Ambient Shadows**. These must be extra-diffused (Blur: 40px+) and low-opacity (4%–6%). The shadow color should be a tinted version of `on-surface` (`#1c1c18`) to mimic natural, warm light.
- **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` token at 15% opacity. It should be barely perceptible—a "ghost" of a line.

---

## 5. Components: shadcn/ui Refined

All components follow the `Roundedness Scale` (Default: `0.25rem`) to maintain a sharp, bespoke feel. We avoid heavy rounding to stay within the "Modern" realm.

### Buttons
- **Primary:** `primary` background with `on-primary` text. Use a subtle gradient from top-left to bottom-right.
- **Secondary:** `secondary_container` background. This is our "Gold Accent" moment—use it for "Add to Cart" or "Buy Now."
- **Tertiary:** No background. Only `on-surface` text with a `label-md` weight.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines (`
`).
- Separate card items using vertical white space (Spacing scale `8` or `10`) or by alternating between `surface-container-low` and `surface-container-lowest`.

### Input Fields
- Use `surface-container-lowest` for the input background.
- The focus state should not be a thick blue ring; it should be a transition to the `secondary` (gold) token on the bottom border only, or a subtle increase in the container's tonal brightness.

### Custom Component: The "Gallery Stack"
For a card e-commerce site, we need a custom component. Use a series of `surface-container-high` containers that overlap slightly in an asymmetrical grid (using negative margins from the spacing scale) to showcase card designs as if they were laid out on a physical desk.

---

## 6. Do's and Don'ts

### Do:
- **Use Large Spacing:** Lean heavily on spacing tokens `16` (5.5rem) and `20` (7rem) to separate major sections. Luxury is defined by unused space.
- **Embrace Warmth:** Ensure the `background` (`#fcf9f3`) is always the base. Avoid pure `#ffffff` unless it is a specific `surface-container-lowest` card.
- **Check Typography Scales:** Use `notoSerif` for numbers and prices to give them a "luxury tag" feel.

### Don't:
- **Don't use 100% Opaque Borders:** This immediately breaks the "Modern Heirloom" aesthetic.
- **Don't use Standard Shadows:** Never use the default `shadow-md` from Tailwind. Always use the Ambient Shadow guidelines above.
- **Don't use Center-Align for Everything:** Use left-aligned editorial layouts with large, asymmetric imagery to maintain a "Custom" feel.
- **Don't crowd the UI:** If you feel you need a divider, you actually need more whitespace. Increase the spacing token instead.

---
*This document serves as the final authority on the visual and structural implementation of the design system for all junior designers and developers.*```